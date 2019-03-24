import { Component, OnInit } from '@angular/core';
import { planillaE } from './planillaE.modelo';

@Component({
  selector: 'app-ejemplop',
  templateUrl: './ejemplop.component.html',
  styleUrls: ['./ejemplop.component.css']
})
export class EjemplopComponent implements OnInit {

  listaDU: planillaE [] =[
    {detalle:{
      registro:'025',
      solicitud: '18',
      nombre: 'Maria',
      contrato: '0027',
      cheque: '24715',
      dependencia: 'Ingenieria',
      liquido: '9,9961.08',
    }},{
    detalle:{
      registro:'026',
      solicitud: '19',
      nombre: 'Luis',
      contrato: '0028',
      cheque: '24716',
      dependencia: 'Farmacia',
      liquido: '10,000.00',
    }},{
      detalle:{
        registro:'027',
        solicitud: '20',
        nombre: 'Mariana',
        contrato: '0029',
        cheque: '24717',
        dependencia: 'Plan',
        liquido: '15,000.00',
      }},
  ];

  

  constructor() { }

  nombre = "LUIS RENE ALVAREZ CALI";
  regPersonal = 50507;
  montoOriginal = 10000;
  tasaInteres = 10.92;
  plazo = 24;
  cuota = 465.71;

  ngOnInit() {
  }
  mensajito(msg){
    console.log(msg);
    if(msg==25){
      window.alert(msg);
    }
    
  }

}
