import { Component, Inject, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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
import { CotizacionService } from '../../../../shared/services/cotizacion.service';
import { Cotizacion } from '../../../../shared/models/cotizacion/cotizacion';
import { Estatus } from '../../../../shared/models/cotizacion/estatus';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { StorageService } from '../../../../shared/services/storage/storage.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpEventType, HttpClient } from "@angular/common/http";
import { ToastService } from '../../../../shared/services/toast.service';
import {NgOption} from "@ng-select/ng-select";
import { DatePipe } from '@angular/common'

import * as moment from 'moment'

export interface Status {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'vex-add-cotizacion',
  templateUrl: './add-cotizacion.component.html',
  styleUrls: ['./add-cotizacion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[DatePipe]
})
export class AddCotizacionComponent implements OnInit {


  addCotizacion: Cotizacion = new Cotizacion();
  clientList: Cotizacion[];
  clientObject: Cotizacion;
  loading = false;



  archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });

  static id = 1;

  titl = 'ng-bootstrap-demo';

  uploafPercent: Observable<number>;
  urlImage: Observable<string>;
  
  form: FormGroup;
  vialidadRequired : FormGroup
  submitted = false;
  
  mode: 'create' | 'update' = 'create';

  selectedValue: 0;
  myestatus= new Estatus;

status: Status[] = [
  {value: 1, viewValue: 'Vencidos'},
  {value: 2, viewValue: 'Por vencer'},
  {value: 3, viewValue: 'A tiempo'}
];

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

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();


  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public defaults: any,
    private dialogRef: MatDialogRef<AddCotizacionComponent>,
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private storageService: StorageService,
    private cotizacionService: CotizacionService,
    private storage: AngularFireStorage,
    private http: HttpClient,
    public toastService: ToastService,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    if(this.storageService.getSession("$key")!=null){
      this.addCotizacion = this.storageService.getSession("mydata")     
    }

    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Cotizacion;
    }

    const newId = this.firestore.createId();
    this.storageService.setSession("mykey", newId)

    this.createForm()
    this.myFunction()


  }

  get f() { return this.form.controls; }

  createForm() {
    this.form = this.fb.group({
      folioCotizacion: ['', Validators.required],
      folioFactura: ['', Validators.required],
      cliente: ['', Validators.required],
      importe: ['', Validators.required],
      fechaPago: ['', Validators.required]
      //estatus: [undefined, Validators.required]
    });
  }

  date
  myFunction(){
    this.date=new Date();
    console.log("date"+ this.date)
    let latest_date =this.datepipe.transform(this.date, 'dd/MM/yyyy');
    console.log("my day "+ latest_date)
   }

   

  addClient(value) {
    this.date=new Date();
  
    if(this.form.invalid){

      this.toastService.show('Campos requeridos', {
        classname: 'bg-danger text-light',
        delay: 2000 ,
        autohide: true,
        headertext: 'ERROR'
      });

    }else{
      let latest_date =this.datepipe.transform(value.fechaPago, 'dd/MM/yyyy');

      let vencidos =this.datepipe.transform(this.date, 'dd/MM/yyyy');
      console.log("my day "+ vencidos)

      var admission = moment(latest_date, 'DD/MM/YYYY'); 
      var discharge = moment(vencidos, 'DD/MM/YYYY');
      var dif = discharge.diff(admission, 'days')
      console.log(dif)

      
      if(dif >= 0){
        console.log("entro a vencidos")
          value.estatus = 1
      }else if(dif >= -5) {
          console.log("entro por vencer")
          value.estatus = 2
    
      }else if(dif <= -6){
        console.log("entro a tiempo")
          value.estatus = 3
      }
      
      value.fechaPago = latest_date

    this.cotizacionService.postCotizacion(value);
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

          folioCotizacion: this.addCotizacion.folioCotizacion,
          folioFactura: this.addCotizacion.folioFactura,
          cliente: this.addCotizacion.cliente,
          importe: this.addCotizacion.importe,
          fechaPago: this.addCotizacion.fechaPago,
          estatus: this.addCotizacion.estatus,
        }
  
        const customer = this.form.value;  

        customer.folioCotizacion = Number(values.folioCotizacion)
        customer.folioFactura = Number(values.folioFactura)
        customer.cliente = String(values.cliente)
        customer.importe = String(values.importe)
        customer.fechaPago = String(values.fechaPago)
        customer.estatus = String(values.estatus)

        this.cotizacionService.updateCotizacion(values)
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

    /*if (!customer.imageSrc) {
      customer.imageSrc = this.myurlimage.nativeElement.value;
    }*/

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
