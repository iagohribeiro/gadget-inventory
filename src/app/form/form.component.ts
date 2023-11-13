import { LoginComponent } from './../login/login.component';
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  @ViewChild('mobile-demo') sideNav?: ElementRef;

  @Input() value: string = '';
  @Output() notify = new EventEmitter<string>();
  @Input() isHideMenu:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}
  
  ngOnChanges():void{
    this.notify.emit('Successful login!');
  }

  ngOnInit(): void{
    this.route.queryParams.subscribe((params)=>{
      if(params['type'] == 'register')
      {
        this.isHideMenu=true;
      }
    });
  }

  ngAfterViewInit(): void{
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
}
