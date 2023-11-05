import { Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('mobile-demo') sideNav?: ElementRef;

  ngAfterViewInit(): void{
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
}
