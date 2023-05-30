import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedesComponent } from './redes/redes.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { EnlacesComponent } from './enlaces/enlaces.component';

@NgModule({
  declarations: [
    AppComponent,
    RedesComponent,
    NavegadorComponent,
    BuscadorComponent,
    EnlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
