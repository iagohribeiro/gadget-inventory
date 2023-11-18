import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router:Router) { }

  private logoutSource = new Subject<boolean>

  public logout(state:boolean){
    this.logoutSource.next(state);
    this.router.navigate(['/login']);
  }

  asObservable():Observable<boolean>{
    return this.logoutSource;
  }
}
