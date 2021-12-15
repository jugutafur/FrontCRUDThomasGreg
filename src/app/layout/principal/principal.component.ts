import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { archivo } from '../../core/models/Archivo.models';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  habilitarCreate : boolean = false;
  habilitarUpdate : boolean = false;
  habilitarUpdate2 : boolean = false;
  habilitarDelete : boolean = false;
  confirmacioDelete : boolean = false;
  id : String = "";
  archives: archivo[]= [];
  enviarObjecto: archivo = {
    id: null,
    company: null,
    box: null,
    bag: null,
    folder: null,
    document: null
  };

  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService) {

  }

  ngOnInit(): void {
  }

  getArchives(){
    this.apiService.getAllArchives()
    .subscribe( archives=>{
      this.archives = archives
    })
  }

  create(){
    this.habilitarCreate=true;
    this.habilitarUpdate = false;
    this.habilitarUpdate2 = false;
    this.habilitarDelete = false;
  }

  Enviar(){
    this.habilitarCreate=false;
    console.log(this.enviarObjecto);
    this.apiService.createArchive(this.enviarObjecto).subscribe();
    this.toastrService.success("Registro Guardado con exito");
    this.toastrService.success("Por favor actualizar la tabla");
  }

  update(){
    this.habilitarCreate=false;
    this.habilitarDelete = false;
    this.habilitarUpdate = true;
  }

  buscar(){
    this.apiService.updateArchive(this.id).subscribe(data =>{
      this.enviarObjecto = data
      if (data == null){
        this.habilitarUpdate2 = false;
        this.toastrService.error("El numero ingresado no pertenece a la tabla");
      } else {
        console.log(this.enviarObjecto);
        this.habilitarUpdate2 = true;
      }
    });
  }

  Eliminar(){
    this.habilitarDelete = true;
    this.habilitarCreate=false;
    this.habilitarUpdate = false;
    this.habilitarUpdate2 = false;
  }

  EliminarArchive(){
    this.apiService.DeleteArchive(this.id).subscribe(data => {
      this.confirmacioDelete = data;
      if(this.confirmacioDelete){
        this.toastrService.success("Borrado Exitoso");
        this.toastrService.success("Por favor actualizar la tabla");
      }else {
        this.toastrService.error("El numero ingresado no pertenece a la tabla");
      }
    })
  }

}
