import { Gadget } from './../gadget';
import { NgFor } from '@angular/common';
import { LoginComponent } from './../login/login.component';
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, OnInit, OnChanges, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as M from 'materialize-css';
import { NgForm } from '@angular/forms';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  @ViewChild('mobile-demo') sideNav?: ElementRef;
  @ViewChild('myForm') myForm!:NgForm;

  @Input() value: string = '';
  @Output() notify = new EventEmitter<string>();
  @Input() isHideMenu:boolean = false;

  editMode:boolean=false
  listGadgets:Gadget[]=[];
  model:string='';
  brand:string='';
  serial:string='';
  coverage:string='';

  constructor(private route: ActivatedRoute, private router: Router, private localStore: LocalService) {}
  
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
    Object.keys(localStorage).forEach(data => 
    {
      let item = this.localStore.getData(data) || '';
      if (item != '')
        this.listGadgets.push(JSON.parse(item) as Gadget)
    });
  }

  ngAfterViewInit(): void{
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

  submitTemplate(){
    if(this.editMode)
    {
      let indexFind = this.listGadgets.findIndex(x => x.serial == this.serial)
      this.listGadgets[indexFind].model = this.model;
      this.listGadgets[indexFind].brand = this.brand;
      this.listGadgets[indexFind].serial = this.serial;
      this.listGadgets[indexFind].coverage = this.coverage;
      this.myForm.reset();
      this.localStore.saveData(this.listGadgets[indexFind].serial,JSON.stringify(this.listGadgets[indexFind]));
      this.editMode = false;
    }
    else
    {
      const newGadget:Gadget = new Gadget(this.model, this.brand, this.serial, this.coverage);
      this.listGadgets.push(newGadget);
      console.log(this.listGadgets);
      this.localStore.saveData(newGadget.serial,JSON.stringify(newGadget));
      this.myForm.reset();
    }

  }
  editGadget(gadget:Gadget){
    this.model = gadget.model;
    this.brand = gadget.brand;
    this.serial = gadget.serial;
    this.coverage = gadget.coverage;
    this.editMode = true;
  }
  deleteGadget(gadget:Gadget){
    let indexFind = this.listGadgets.indexOf(gadget);
    this.listGadgets.splice(indexFind, 1);
    this.localStore.removeData(gadget.serial);
  }
}
