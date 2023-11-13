import { MenuComponent } from './../menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router) {}
  user:String = ''
  gotoForm(){
    console.log(this.user)
    if(this.user == 'admin@host.com')
      this.router.navigate(['/form']);
    else if(this.user == 'normaluser@host.com')
      this.router.navigate(['/form'], {queryParams:{type: 'register'}});
    else
      window.alert('Wrong User!');
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
