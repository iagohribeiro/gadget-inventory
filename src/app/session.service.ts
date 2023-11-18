import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router:Router) { }

  private logoutSource = new Subject<boolean>
  private homeSource = new Subject<boolean>
  private gadgetSource = new Subject<boolean>

  public logout(state:boolean){
    this.logoutSource.next(state);
    this.router.navigate(['/login']);
  }
  public home(state:boolean){
    this.homeSource.next(state);
    this.router.navigate(['/form']);
  }
  public gadget(state:boolean){
    this.gadgetSource.next(state);
    this.router.navigate(['/gadget']);
  }

  asObservable():Observable<boolean>{
    return this.logoutSource;
  }
}
