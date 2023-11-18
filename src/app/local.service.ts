import { Injectable } from '@angular/core';
import { Gadget } from './gadget';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private router: Router) { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public getData(key: string) {
    return localStorage.getItem(key);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }
  public clearData() {
    localStorage.clear();
  }
  public getUserLogged(key: string)
  {
    return localStorage.getItem(key);
  }
}
