import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Modal
import {PassagemModalPageModule} from './passagem-modal/passagem-modal.module';

// List
import {ListaPageModule} from './lista/lista.module';
// Http
import {HttpClientModule} from '@angular/common/http';

// Storage
import {IonicStorageModule} from '@ionic/storage';

// Camera
import {Camera} from '@ionic-native/camera/ngx';
import { PassagemPageModule } from './passagem/passagem.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     PassagemModalPageModule,
     PassagemPageModule,
     ListaPageModule,
     HttpClientModule,
     IonicStorageModule.forRoot(),
 
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
