import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { SharedModule } from './shared/shared.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FireBaseConfig } from '../environments/firebaseConfig';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './pages/apps/toast/toast/toast.component';
import {MatSelectModule} from '@angular/material/select';


import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'




@NgModule({
  declarations: [AppComponent, ToastComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    // Vex
    VexModule,
    CustomLayoutModule,
    AngularFireModule.initializeApp(FireBaseConfig),
    AngularFireStorageModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatSelectModule,
    MatNativeDateModule,
    FontAwesomeModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
