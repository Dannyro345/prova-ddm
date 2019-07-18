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

  passagem = {
    "nome": "Passagem",
    "url": "https://viagenscinematograficas.com.br/wp-content/uploads/2015/10/Paris-Slider-min-2-740x431@2x.jpg",
  }

  constructor(public modalController: ModalController, private storage: Storage) {
    
  }

  async modal() {
    const modal = await this.modalController.create({
      component: PassagemModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.passagem = dados.data
    })
  }

}
