import { Component } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  user={
    mail:"",
    passw:""

  }

  constructor(private firebaseauth :FirebaseserviceService, private router:Router){}

  Ingresar(){
    
    const {mail,passw } = this.user
    this.firebaseauth.Login(mail,passw).then(res =>{
      console.log("se registro: " ,res)
    })
    this.firebaseauth.Obtenerusuario().subscribe(res => {
      if (res?.email != undefined) {
   
       this.router.navigate(["/api"])
      } 
    });
  }
  IngresaraGoogle(){
    
    const {mail,passw } = this.user
    this.firebaseauth.LoginwithGoogle(mail,passw).then(res =>{
      console.log("se registro: " ,res)
    })

    this.firebaseauth.Obtenerusuario().subscribe(res => {
      if (res?.email != undefined) {
   
       this.router.navigate(["/api"])
      } 
    });
    
  }
Status () {
 
  this.firebaseauth.Obtenerusuario().subscribe(res=>{console.log(res?.email);
  })
}

Logout(){
  this.firebaseauth.Salirdelusuario();
}

}
