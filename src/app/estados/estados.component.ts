import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

export interface miPlanilla {
  position: number;
  registro: string;
  solicitud: string;
  nombre: string;
  contrato: string;
  cheque: string;
  dependencia: string;
  liquido: number;
  estado: string;
}




@Component({

  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css'],

 
})



export class EstadosComponent implements OnInit {

  rol = 4;
  
  //constructor() { }

  constructor() {}

  displayedColumns = ['position', 'registro', 'solicitud', 'nombre', 'contrato','cheque','dependencia','liquido','estado'];
  
  planillas: miPlanilla[] = [  
    {position: 0, registro: 'registro 0', solicitud: 'solicitud 0', nombre: 'nombre 0', contrato: 'contrato 0', cheque: 'cheque 0', dependencia: 'dependencia 0', liquido: 50, estado: 'estado 0'}, 
    {position: 1, registro: 'registro 1', solicitud: 'solicitud 1', nombre: 'nombre 1', contrato: 'contrato 1', cheque: 'cheque 1', dependencia: 'dependencia 1', liquido: 5, estado: 'estado 1'}, 
    {position: 2, registro: 'registro 2', solicitud: 'solicitud 2', nombre: 'nombre 2', contrato: 'contrato 2', cheque: 'cheque 2', dependencia: 'dependencia 2', liquido: 5, estado: 'estado 2'}, 
    {position: 3, registro: 'registro 3', solicitud: 'solicitud 3', nombre: 'nombre 3', contrato: 'contrato 3', cheque: 'cheque 3', dependencia: 'dependencia 3', liquido: 5, estado: 'estado 3'}, 
    {position: 4, registro: 'registro 4', solicitud: 'solicitud 4', nombre: 'nombre 4', contrato: 'contrato 4', cheque: 'cheque 4', dependencia: 'dependencia 4', liquido: 5, estado: 'estado 4'}, 
    {position: 5, registro: 'registro 5', solicitud: 'solicitud 5', nombre: 'nombre 5', contrato: 'contrato 5', cheque: 'cheque 5', dependencia: 'dependencia 5', liquido: 5, estado: 'estado 5'}, 
    {position: 6, registro: 'registro 6', solicitud: 'solicitud 6', nombre: 'nombre 6', contrato: 'contrato 6', cheque: 'cheque 6', dependencia: 'dependencia 6', liquido: 5, estado: 'estado 6'}, 
    {position: 7, registro: 'registro 7', solicitud: 'solicitud 7', nombre: 'nombre 7', contrato: 'contrato 7', cheque: 'cheque 7', dependencia: 'dependencia 7', liquido: 5, estado: 'estado 7'}, 
    {position: 8, registro: 'registro 8', solicitud: 'solicitud 8', nombre: 'nombre 8', contrato: 'contrato 8', cheque: 'cheque 8', dependencia: 'dependencia 8', liquido: 5, estado: 'estado 8'}, 
    {position: 9, registro: 'registro 9', solicitud: 'solicitud 9', nombre: 'nombre 9', contrato: 'contrato 9', cheque: 'cheque 9', dependencia: 'dependencia 9', liquido: 5, estado: 'estado 9'}, 
    {position: 10, registro: 'registro 10', solicitud: 'solicitud 10', nombre: 'nombre 10', contrato: 'contrato 10', cheque: 'cheque 10', dependencia: 'dependencia 10', liquido: 5, estado: 'estado 10'}, 
    
  ];
  
  ngOnInit() {
  }
  mensaje(msg: string){
	  console.log(msg);
  }
  
  getTotalLiquido() {
      return this.planillas.map(t => t.liquido).reduce((acc, value) => acc + value, 0);
  }

  miPlanilla="jaja";
  buscarPlanilla(noPlanilla: string){}
  actualizarPlanilla(){}
  planillaRevisado(){}
  planillaAprobado(){}

}


