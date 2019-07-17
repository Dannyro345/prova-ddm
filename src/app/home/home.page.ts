import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {PassagemModalPage} from '../passagem-modal/passagem-modal.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario = {
    "nome": "Usuario",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/CandymyloveYasu.png/220px-CandymyloveYasu.png",
  }

  constructor(public modalController: ModalController, private storage: Storage) {
    
  }

  async modal() {
    const modal = await this.modalController.create({
      component: PassagemModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.usuario = dados.data
    })
  }

}
