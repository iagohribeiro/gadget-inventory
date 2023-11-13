import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges{
  @Input() isHideMenu:boolean = false;
  
  constructor(){}

  ngOnChanges(): void{
    window.alert('Welcome to register pager');
  }
  hide(value:string):boolean{
    if(value == 'login'){
      return true;
    }
    return false 
  }
  ngOnInit(){}
}
