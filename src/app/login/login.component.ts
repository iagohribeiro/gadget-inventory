import { SessionService } from './../session.service';
import { Subscription } from 'rxjs';
import { LocalService } from './../local.service';
import { MenuComponent } from './../menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router, private localService:LocalService, private sessionService:SessionService) {
    this.subscription = this.sessionService.asObservable().subscribe((data)=>{
      if(data)
      {
        this.localService.saveData('LOGGED', 'false');
        window.alert('Email ' + this.localService.getData('$USER$') + ' logged out successfully!');
        this.localService.removeData('$USER$');
      }
    })
  }
  user:string = ''
  subscription!:Subscription;

  gotoForm(){
    console.log(this.user)
    if(this.user == 'admin@host.com')
    {
      this.router.navigate(['/form']);
      this.localService.saveData('LOGGED', 'true');
      this.localService.saveData('$USER$',  this.user);
    }
    else if(this.user == 'normaluser@host.com')
    {
      this.router.navigate(['/form'], {queryParams:{type: 'register'}});
      this.localService.saveData('LOGGED', 'true');
      this.localService.saveData('$USER$',  this.user);
    }
    else
    {
      window.alert('Wrong User!');
      this.localService.saveData('LOGGED', 'false');
      this.localService.removeData('$USER$');
    }
  }

  onNotify() {
    window.alert('Successful login!');
  }
  onFormEvent(event:string){
    window.alert(event);
  }
  ngOnInit(): void {

  }
}
