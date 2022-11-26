import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

// import { DetalleComponent } from './detalle/detalle.component';
// import { FooterComponent } from './footer/footer.component';
// import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
// import { PerfilComponent } from './perfil/perfil.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'index',
    component:IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
