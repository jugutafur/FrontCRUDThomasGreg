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
    return this.http.get<any>(environment.Url_apiBD+ "todos");
  }

  createArchive(archive: archivo){
    return this.http.post(environment.Url_apiBD+ "save", archive);
  }

  updateArchive(id: String){
    return this.http.get<archivo>(environment.Url_apiBD + id);
  }

  DeleteArchive(id: String){
    console.log("ver id a Eliminar desde service");
    console.log(id);
    return this.http.delete<boolean>(environment.Url_apiBD+ "delete/" + id);
  }
/*
  createUser(Archivo: archivo){
    return this.http.post(environment.Url_apiBD+ "save", Archivo);
  }

    updateArchive(id: string, changes: Partial<archivo>){
    return this.http.put<archivo[]>(environment.Url_apiBD + id, changes);
  }

  loginAcount(){
    return this.http.get<archivo[]>(environment.Url_apiBD+ "/todos");
  }
*/
}
