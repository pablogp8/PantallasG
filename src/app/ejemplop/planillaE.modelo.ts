export class planillaE{
    detalle: Detalle={
        registro: '',
        solicitud: '',
        nombre: '',
        contrato: '',
        cheque: '',
        dependencia: '',
        liquido: '',
    }
}
export interface Detalle{
    registro: string;
    solicitud: string;
    nombre: string;
    contrato: string;
    cheque: string;
    dependencia: string;
    liquido: string;
    
}