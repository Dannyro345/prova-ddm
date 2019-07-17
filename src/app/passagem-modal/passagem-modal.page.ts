import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-passagem-modal',
  templateUrl: './passagem-modal.page.html',
  styleUrls: ['./passagem-modal.page.scss'],
})
export class PassagemModalPage implements OnInit {

  // Passando as informações
  passagem = {

    "id": "",
    "createdAt": "",
    "origem": "",
    "destino": "",
    "poltrona": "",
    "valor": "",
    "data": ""
    
  }

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  // Chamando o metodo add
  add(){
    this.modal.dismiss(this.passagem)
  }

}
