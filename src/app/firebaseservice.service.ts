import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth"
import firebase from "firebase/compat/app";
@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {

  constructor( private firebaseauth: AngularFireAuth) { }
  
  async register (mail: string, passw: string){
    try {
      return await this.firebaseauth.createUserWithEmailAndPassword(mail,passw)
    } catch (error) {
      console.log("error encontrado en el login: ", error);
      return null;
      
    }
  }
   async Login (mail: string, passw: string){
    try {
      return await this.firebaseauth.signInWithEmailAndPassword(mail,passw)
    } catch (error) {
      console.log("error encontrado en el login: ", error);
      return null;
      
    }
   }
   async LoginwithGoogle (mail: string, passw: string){
    try {
      return await this.firebaseauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    } catch (error) {
      console.log("error encontrado en el login de google: ", error);
      return null;
      
    }
   }
  
  Obtenerusuario(){
    return this.firebaseauth.authState;
  }
  Salirdelusuario(){
    return this.firebaseauth.signOut();
  }

}
