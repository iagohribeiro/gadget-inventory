import { Gadget } from './gadget';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class GadgetPromiseService {
  URL='http://localhost:3000/gadgets';
  URL_USER='http://localhost:3000/users'

  httpOptions ={
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private httpClient:HttpClient, private localStore: LocalService) {}


  async save(gadget:Gadget): Promise<Gadget>{
    try {
      console.log('Gadget saved successfuly!')
      return await lastValueFrom (this.httpClient
      .post<Gadget>(this.URL, JSON.stringify(gadget), this.httpOptions));
    }
    catch(error)
    {
      console.log('Error to save the Gadget!');
      console.log(error);
      this.localStore.saveData(gadget.serial,JSON.stringify(gadget));
      return gadget
    }
  }

  getByUserId(id:number)
  {
    return this.httpClient.get<Gadget[]>(`${this.URL}/${id}/gadgets`).toPromise();
  }

  getAll()
  {
    return lastValueFrom (this.httpClient.get<Gadget[]>(this.URL));
  }
}
