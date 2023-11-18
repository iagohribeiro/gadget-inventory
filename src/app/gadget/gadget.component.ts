import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Gadget } from '../gadget';
import { GadgetPromiseService } from '../gadget-promise.service';
import { LocalService } from '../local.service';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.component.html',
  styleUrls: ['./gadget.component.css']
})
export class GadgetComponent implements AfterViewInit{
  @ViewChild('mobile-demo') sideNav?: ElementRef;
  @Input() isHideMenu:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private localStore: LocalService, private sessionService:SessionService,
    private gadgetPromiseService:GadgetPromiseService){}
  
  editMode:boolean=false
  listGadgets:Gadget[]=[];
  model:string='';
  brand:string='';
  serial:string='';
  coverage:string='';

  ngOnInit(): void{
    this.route.queryParams.subscribe((params)=>{
      if(params['type'] == 'register')
      {
        this.isHideMenu=true;
      }
    });
    if (!this.isHideMenu) //that means the admin user was logged - They have access to all Gadgets
    {
      /*let item = this.gadgetPromiseService.getAll().then((gadgets: Gadget[]) =>{
          for (let gadget of gadgets)
          {
            this.listGadgets.push(gadget);
          }
      }
      );*/
      let item = this.gadgetPromiseService.getAllObservable().subscribe(
        (gadgets: Gadget[]) =>{
          for (let gadget of gadgets)
          {
            this.listGadgets.push(gadget);
          }
        },
        (error) =>{
          console.log(error);
          alert(error.errorMessage);
        }
      );
    }
    else
    {
      Object.keys(localStorage).forEach(data => 
        {
          let item = this.localStore.getData(data) || '';
          if (item != '')
            this.listGadgets.push(JSON.parse(item) as Gadget)
        });
    }
  }

  ngAfterViewInit(): void{
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

}
