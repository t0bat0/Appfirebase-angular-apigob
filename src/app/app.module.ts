import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import {AngularFireModule} from "@angular/fire/compat";
import { ApigobComponent } from './apigob/apigob.component'
import { HttpClientModule } from '@angular/common/http';
const firebaseConfig = {
  apiKey: "AIzaSyBXE-JMJsfhn8Llp8ocAa4IlJoEvI-0plg",
  authDomain: "fir-angular-21da7.firebaseapp.com",
  projectId: "fir-angular-21da7",
  storageBucket: "fir-angular-21da7.appspot.com",
  messagingSenderId: "507524091265",
  appId: "1:507524091265:web:16390260bd91bc18b8ec80"
};

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ApigobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
