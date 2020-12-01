import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserApi} from '../models/users/usersapi';
import { Observable } from 'rxjs';
import { StorageService } from './storage/storage.service'; 
import { Cotizacion } from '../models/cotizacion/cotizacion';
import { Estatus } from '../models/cotizacion/estatus'
import 'rxjs/add/operator/map'
 
@Injectable()
export class CotizacionService {

  cotizacion: AngularFirestoreCollection<Cotizacion>;
  Cotizacion: AngularFirestoreDocument<Cotizacion>
  cotizacions: Observable<Cotizacion[]>;

  
  constructor(
    private fb: AngularFirestore,
    private storageService: StorageService
	//	private authService: AuthService,
  ) {

    this.cotizacion = fb.collection('Cotizacion');

    this.cotizacions = this.cotizacion.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Cotizacion;
        data.$key = a.payload.doc.id;
        return data;
      });
    });

  }

  getTest() {
	//this.products = this.db.list('products');
  //this.Establecimientos = this.db.collection('Establecimientos');

  //return this.firestore.collection('policies').snapshotChanges();
  //return this.Establecimientos;
  return this.fb.collection('Cotizacion', ref => ref.orderBy('id')).valueChanges();
  //return this.fb.collection('Establecimientos').snapshotChanges();
  
}

getAllCotizacion() {
  console.log("print test get "+this.cotizacions)
  return this.cotizacions;
}

postCotizacion(value) {
  //const newId = this.fb.createId();
  //alert("myID:: "+newId)
  
  //this.storageService.setSession("mykey", newId);
  //return this.fb.collection('operators').doc( this.storageService.getSession("mykey")).set(data);
  var myid = Math.random().toString(36).substring(2)
  return this.fb.collection('Cotizacion').doc( this.storageService.getSession("mykey")).set({
    

    $key: this.storageService.getSession("mykey"),
    id: myid, 
    folioCotizacion: value.folioCotizacion,
    folioFactura: value.folioFactura,
    cliente: value.cliente,
    importe: value.importe,
    fechaPago: value.fechaPago,
    estatus: value.estatus

  })
}

updateCotizacion(value){
  //value.nameToSearch = value.name.toLowerCase();
  var update =  this.fb.collection('Cotizacion').doc(this.storageService.getSession("$key"));
  return update.update({

    folioCotizacion: value.folioCotizacion,
    folioFactura: value.folioFactura,
    cliente: value.cliente,
    importe: value.importe,
    fechaPago: value.fechaPago,
    estatus: value.estatus
  })
  .then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
}


deleteCotizacion(myid: string){
    this.fb.collection("Cotizacion").doc(myid).delete().then(function() {
    console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
      });

}

}