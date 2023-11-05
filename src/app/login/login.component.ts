import { MenuComponent } from './../menu/menu.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  gotoForm(){
    this.router.navigate(['/form']);  
  }
}
