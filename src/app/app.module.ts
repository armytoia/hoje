import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ListarContatoComponent } from './contato/listar-contato/listar-contato.component';
import { SalvarContatoComponent } from './contato/salvar-contato/salvar-contato.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent, ListarContatoComponent, SalvarContatoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyATTE9-BcwmuX6yIBFDxkDYeeOdjupBaY0",
      authDomain: "kook-98558.firebaseapp.com",
      databaseURL: "https://kook-98558.firebaseio.com",
      projectId: "kook-98558",
      storageBucket: "kook-98558.appspot.com",
      messagingSenderId: "619534260429",
      appId: "1:619534260429:web:cd8c3099341cd100"

    }), AngularFireDatabaseModule


  ],



  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
