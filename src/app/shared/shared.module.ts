import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NoProductsFoundComponent } from './components/no-products-found/no-products-found.component';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule, FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
// import { OwlModule } from 'ngx-owl-carousel';
// import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users/users.service';
// import { TranslatePipe } from './pipes/translate.pipe';
import { StorageService } from './services/storage/storage.service';

// import { NgxContentLoadingModule } from 'ngx-content-loading';
// import { CardLoaderComponent } from './components/card-loader/card-loader.component';
// import { MomentTimeAgoPipe } from './pipes/moment-time-ago.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FireBaseConfig } from "../../environments/firebaseConfig";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { OperatorsService } from './services/operators.services';
import { ToastService } from './services/toast.service';
import { CotizacionService } from './services/cotizacion.service'
 

@NgModule({
	imports: [
		AngularFireModule.initializeApp(FireBaseConfig),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
	],
	declarations: [
	],
	exports: [
		AngularFireModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		FormsModule,
		RouterModule,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule, ScrollingModule
	],
 providers: [
		UsersService, 
		StorageService,
		OperatorsService,
		ToastService,
		CotizacionService
	]
})
export class SharedModule {

 }