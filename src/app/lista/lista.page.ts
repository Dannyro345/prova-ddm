import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {PassagemModalPage} from '../passagem-modal/passagem-modal.page';
import { PassagemService } from '../services/passagem.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage {

  passagens;

  constructor(private http: HttpClient, public loadingController: LoadingController, public modalController: ModalController,private passagemservice:PassagemService) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.passagemservice.list().subscribe(
        (data) => {
          this.passagens = data
          loader.dismiss()
        }
      )
    })
  }

  add(passagem) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.passagemservice.post(passagem).subscribe(
        (data) => {
          this.passagens.push(data)
          loader.dismiss()
        }
      )
    })
  }

  remove(passagem) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.passagemservice.delete(passagem.id).subscribe(
        (data) => {
          var i = this.passagens.indexOf(passagem);
          this.passagens.splice(i, 1);
          loader.dismiss()
        }
      )
    })
  }

  async modal() {
    const modal = await this.modalController.create({
      component: PassagemModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.add(dados.data)
    })
  }

}
