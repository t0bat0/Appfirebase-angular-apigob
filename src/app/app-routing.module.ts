import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ApigobComponent } from './apigob/apigob.component';

const routes: Routes = [{
  path:"",
  component:UsuarioComponent,
  title:"Login"},
  {
    path:"api",
    component:ApigobComponent,
    title:"Api"
  },
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
