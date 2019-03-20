import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

export interface PeriodicElement {
  NOMBRE: string;
  DPI: number;
  CONTRATO: number;
  SALDO: number;
  PRESTAMO: string;
  MONTO: number;
  accion;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {DPI: 2567686510101, NOMBRE: 'Lester Mazariegos', CONTRATO: 0, SALDO: 100,PRESTAMO:'744',MONTO: 700,accion:10},
  {DPI: 2567686510101, NOMBRE: 'Fernando Navarro', CONTRATO: 1, SALDO: 0,PRESTAMO:'744',MONTO: 700,accion:10},
  {DPI: 2567686510101, NOMBRE: 'Tanya Muhun', CONTRATO: 2, SALDO: 42,PRESTAMO:'744',MONTO: 700,accion:10},
  {DPI: 2567686510101, NOMBRE: 'Beatriz Recinos', CONTRATO: 3, SALDO:552,PRESTAMO:'744',MONTO: 700,accion:10},
  
];


@Component({
  selector: 'app-ordenpago',
  templateUrl: './ordenpago.component.html',
  styleUrls: ['./ordenpago.component.css']
  
})



export class OrdenpagoComponent implements OnInit {
 displayedColumns: string[] = ['DPI', 'NOMBRE', 'CONTRATO', 'SALDO','PRESTAMO','accion'];
  dataSource = ELEMENT_DATA;
   
  constructor() { }

  ngOnInit() {
  
  }

  mensaje() {
     console.log('hello');
    }

}

