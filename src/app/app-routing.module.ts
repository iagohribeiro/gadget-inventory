import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GadgetComponent } from './gadget/gadget.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'form', component:FormComponent},
  {path:'gadget', component:GadgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
