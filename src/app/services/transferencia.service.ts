import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

 private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
   }

   get transferencias(){
    return this.listaTransferencia;
   }

   adicionar(){
    this.hidratar(transferencia);
    this.listaTransferencia.push(this.transferencia);
   }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
