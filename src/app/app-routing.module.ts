import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { VistadetalleComponent } from './vistadetalle/vistadetalle.component';
import { AdminsComponent } from './admins/admins.component';
import { UserComponent } from './user/user.component';
import { GenerosComponent } from './generos/generos.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'generos',
    component: GenerosComponent,
  },
  {
    path: 'generos/:name',
    component: GenerosComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'vistadetalle',
    component: VistadetalleComponent,
  },
  {
    path: 'vistadetalle/:id',
    component: VistadetalleComponent,
  },
  {
    path: 'admins',
    component: AdminsComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
