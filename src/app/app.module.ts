import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { VistadetalleComponent } from './vistadetalle/vistadetalle.component';
import { AdminsComponent } from './admins/admins.component';
import { UserComponent } from './user/user.component';
import { GenerosComponent } from './generos/generos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PiepaginaComponent,
    RegistroComponent,
    LoginComponent,
    NosotrosComponent,
    InicioComponent,
    VistadetalleComponent,
    AdminsComponent,
    UserComponent,
    GenerosComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent,InicioComponent,NavegacionComponent,GenerosComponent],
})
export class AppModule {}
