import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserApi} from '../models/users/usersapi';
import { Observable } from 'rxjs';
import { StorageService } from './storage/storage.service'; 
import { Operators } from '../models/operators';



@Injectable()
export class OperatorsService {

  operators: AngularFirestoreCollection<Operators>;
  Operators: AngularFirestoreDocument<Operators>
  operator: Observable<Operators[]>;

  constructor(
    private fb: AngularFirestore,
    private storageService: StorageService
	//	private authService: AuthService,
  ) {

  }

  getAllOperators() {
	//this.products = this.db.list('products');
  //this.Establecimientos = this.db.collection('Establecimientos');

  //return this.firestore.collection('policies').snapshotChanges();
  //return this.Establecimientos;
  return this.fb.collection('operators', ref => ref.orderBy('id')).valueChanges();
  //return this.fb.collection('Establecimientos').snapshotChanges();
  
}

postOperators(value, url) {
  //const newId = this.fb.createId();
  //alert("myID:: "+newId)
  
  //this.storageService.setSession("mykey", newId);
  //return this.fb.collection('operators').doc( this.storageService.getSession("mykey")).set(data);

  var myid = Math.random().toString(36).substring(2)
  return this.fb.collection('operators').doc( this.storageService.getSession("mykey")).set({


    $key: this.storageService.getSession("mykey"),
    id: myid,
    apellidos: value.apellidos, 
    estado: value.estado,
    localidad: value.localidad,
    municipio: value.municipio,
    nombre: value.nombre,
    operadorFoto: url,
    licencia: value.licencia,
    tipoLicencia: value.tipoLicencia,
    ine: value.ine

  })
}

updateOperators(value){
  //value.nameToSearch = value.name.toLowerCase();
  var update =  this.fb.collection('operators').doc(this.storageService.getSession("$key"));
  return update.update({

    apellidos: value.apellidos,
    // codigoPostal: value.codigoPostal,
    // correo: value.correo,
    // curp: value.curp,
    estado: value.estado,
    //fechaNacimiento: value.fechaNacimiento,
    localidad: value.localidad,
    municipio: value.municipio,
    nombre: value.nombre,
    //telefono: value.telefono 
    operadorFoto: value.operadorFoto,
    licencia: value.licencia,
    tipoLicencia: value.tipoLicencia,
    ine: value.ine
  })
  .then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
}


deleteOperators(myid: string){
    this.fb.collection("operators").doc(myid).delete().then(function() {
    console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
      });

}

}
