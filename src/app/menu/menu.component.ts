import { SessionService } from './../session.service';
import { Component, Injectable, Input, OnChanges, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit, OnChanges{
  @Input() isHideMenu:boolean = false;
  
  constructor(private localStore: LocalService, private sessionService:SessionService){}

  ngOnChanges(): void{
    window.alert('Welcome to register pager');
  }
  hide(value:string):boolean{
    if(value == 'login'){
      return true;
    }
    return false 
  }
  logout(){
    this.sessionService.logout(true);
  }
  home(){
    this.sessionService.home(true);
  }
  gadget(){
    this.sessionService.gadget(true);
  }

  ngOnInit(){}
}
