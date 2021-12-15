import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { archivo } from '../models/Archivo.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllArchives (){
    return this.http.get<any>(environment.Url_apiBD);
  }

  getXUser(id: string){
    return this.http.get<archivo[]>(environment.Url_apiBD+ "/" + id);
  }

  createUser(Archivo: archivo){
    return this.http.post(environment.Url_apiBD+ "save", Archivo);
  }

  updateUser(id: string, changes: Partial<archivo>){
    return this.http.put<archivo[]>(environment.Url_apiBD + id, changes);
  }

  loginAcount(){
    return this.http.get<archivo[]>(environment.Url_apiBD+ "/todos");
  }

}
