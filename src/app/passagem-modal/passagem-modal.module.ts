import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PassagemModalPage } from './passagem-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PassagemModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PassagemModalPage]
})
export class PassagemModalPageModule {}
