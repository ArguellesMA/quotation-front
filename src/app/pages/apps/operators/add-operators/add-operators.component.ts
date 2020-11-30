import { Component, Inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//import { Customer } from '../interfaces/customer.model';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';

import { NgForm } from '@angular/forms';
import { OperatorsService } from '../../../../shared/services/operators.services';
import { Operators } from '../../../../shared/models/operators';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { StorageService } from '../../../../shared/services/storage/storage.service';

import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

import { HttpEventType, HttpClient } from "@angular/common/http";
import { ToastService } from '../../../../shared/services/toast.service';

declare var toastr: any;
declare var $: any;
@Component({
  selector: 'vex-add-operators',
  templateUrl: './add-operators.component.html',
  styleUrls: ['./add-operators.component.scss']
})
export class AddOperatorsComponent implements OnInit {

  addOperators: Operators = new Operators();
  clientList: Operators[];
  clientObject: Operators;
  loading = false;

  archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });

  static id = 1;

  titl = 'ng-bootstrap-demo';

  @ViewChild('urlimage', {static: true}) myurlimage: ElementRef; 

  uploafPercent: Observable<number>;
  urlImage: Observable<string>;
  
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  client: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public defaults: any,
    private dialogRef: MatDialogRef<AddOperatorsComponent>,
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private storageService: StorageService,
    private operatorService: OperatorsService,
    private storage: AngularFireStorage,
    private http: HttpClient,
    public toastService: ToastService
  ) { }

  ngOnInit() {
    if(this.storageService.getSession("$key")!=null){
      this.addOperators = this.storageService.getSession("mydata")     
    }

    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Operators;
    }

    const newId = this.firestore.createId();
    this.storageService.setSession("mykey", newId)

    this.createForm()
    /*this.form = this.fb.group({
      $key: newId,
      id: [AddOperatorsComponent.id++],
      apellidos: [this.defaults.apellidos || ''],
      codigoPostal: [this.defaults.codigoPostal || ''],
      correo: [this.defaults.correo || ''],
      curp: [this.defaults.curp || ''],
      estado: [this.defaults.estado || ''],
      fechaNacimiento: [this.defaults.fechaNacimiento || ''],
      localidad: [this.defaults.localidad || ''],
      municipio: [this.defaults.municipio || ''],
      nombre: [this.defaults.nombre || ''],
      telefono: [this.defaults.telefono || '']

    });*/
  }

  get f() { return this.form.controls; }

  createForm() {
    this.form = this.fb.group({
      apellidos: ['', Validators.required],
      estado: ['', Validators.required],
      localidad: ['', Validators.required],
      municipio: ['', Validators.required],
      nombre: ['', Validators.required],
      //operadorFoto: ['', Validators.required],
      licencia: ['', Validators.required],
      tipoLicencia: ['', Validators.required],
      ine: ['', Validators.required],

    });
  }

    /*=====================generate random name=======================================*/
    generateName(){
      try {
        var myDate = new Date();
        var varID = myDate.getFullYear()+""+ myDate.getMonth()+""+myDate.getDay()+""+myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds();
        if (varID.length > 15) {
            varID = varID.substr(0, 15);
        }
        return varID;
    } catch (e) {
        console.log("error!!!"+e.message);
    }
    }
  
    /*=====================submit image and download url image========================*/
    downloadableURL  =  "" ; 
    async onUpload(e){
      //console.log('subir', e.target.files[0]
  
      const id = Math.random().toString(36).substring(2);
      const file =  e.target.files[0];
      const filepath = 'operadores/'+this.generateName();
      const ref =  this.storage.ref(filepath);
      const task =  this.storage.upload(filepath, file);
  
      this.uploafPercent = task.percentageChanges();
      
      //task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
      (await task).ref.getDownloadURL().then(url => {
        this.downloadableURL = url;
        console.log('print url: '+this.downloadableURL)
      });
      //this.storageService.setSession('myimg', filepath)
    }



  addClient(value) {
    if(this.form.invalid){

      this.toastService.show('Campos requeridos', {
        classname: 'bg-danger text-light',
        delay: 2000 ,
        autohide: true,
        headertext: 'ERROR'
      });

    }else{

    this.operatorService.postOperators(value, this.myurlimage.nativeElement.value);
    this.createCustomer();

    this.toastService.show('Se ha guardado con exito una nueva unidad', {
      classname: 'bg-success text-light',
      delay: 3000 ,
      autohide: true,
      headertext: 'REGISTRO EXITOSO'
    });

    }
  }

  updateCustomers(){
    if(this.storageService.getSession("$key")!=null){
      //var value = new AddEstablishment
        var values = { 

          apellidos: this.addOperators.apellidos,
          // codigoPostal: this.addOperators.codigoPostal,
          // correo: this.addOperators.correo,
          // curp: this.addOperators.curp,
          estado: this.addOperators.estado,
          //fechaNacimiento: this.addOperators.fechaNacimiento,
          localidad: this.addOperators.localidad,
          municipio: this.addOperators.municipio,
          nombre: this.addOperators.nombre,
          operadorFoto: this.addOperators.operadorFoto,
          licencia: this.addOperators.licencia,
          tipoLicencia: this.addOperators.tipoLicencia,
          ine: this.addOperators.ine

        }
  
        const customer = this.form.value;  
        customer.apellidos = String(values.apellidos)
        // customer.codigoPostal = Number(values.codigoPostal)
        // customer.correo = String(values.correo)
        // customer.curp = String(values.curp)
        customer.estado = Number(values.estado)
        //customer.fechaNacimiento= String(values.fechaNacimiento)
        customer.localidad = Number(values.localidad)
        customer.municipio = Number(values.municipio)
        customer.nombre = Number(values.nombre)
        //customer.telefono = Number(values.telefono)
        customer.operadorFoto= String (values.operadorFoto)
        customer.licencia= String (values.licencia)
        customer.tipoLicencia= String(values.tipoLicencia)
        customer.ine= String(values.ine)

        this.operatorService.updateOperators(values)
        this.updateCustomer()
        console.log('print value::'+ JSON.stringify(customer));
      }else{
        console.log('no entro')
      }
  }

  save(value) {
    if (this.mode === 'create') {
      this.addClient(value);
    } else if (this.mode === 'update') {
      this.updateCustomers();
    }
  }


  createCustomer() {
    const customer = this.form.value;

    if (!customer.imageSrc) {
      customer.imageSrc = this.myurlimage.nativeElement.value;
    }

    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;

    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}
