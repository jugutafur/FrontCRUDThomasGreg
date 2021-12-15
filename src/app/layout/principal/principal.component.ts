import { Component, OnInit } from '@angular/core';
import { archivo } from '../../core/models/Archivo.models';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public var_seccion: string;
  //lista_galeria: galeria[]= [];
  public menus;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.getArchives();
  }


  getArchives(){
    this.apiService.getAllArchives()
    .subscribe( archives=>{
      var mientras= archives.data.results;
      console.log(archives.data.results);
      this.menus = mientras;
      console.log(this.menus);
    })
  }

}
