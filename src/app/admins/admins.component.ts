import { Component } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css'],
})
export class AdminsComponent {
  codigo: number = 0;
  email: string = '';
  confiemail: boolean = true;
  password: string = '';
  confipassword: boolean = true;
  favoritos?: null;

  usr = {
    codigo: this.codigo,
    email: this.email,
    confiemail: this.confiemail,
    password: this.password,
    confipassword: this.confipassword,
  };

  usuarios = [
    {
      codigo: 0,
      email: 'usuariodeprueba@gmail.com',
      password: '12345lunes',
    }
  ];

  agregarUsuarios() {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].codigo == this.usr.codigo) {
        alert('Ya existe un usuario con esas caracteristicas');
        return;
      }
    }
    this.usuarios.push({
      codigo: this.usr.codigo,
      email: this.usr.email,
      password: this.usr.password,
    });
    this.usr.codigo = 0;
    this.usr.email = '';
    this.usr.password = "";
  }

  seleccionar(usr: { codigo: number; email: string; password: string }) {
    this.usr.codigo = usr.codigo;
    this.usr.email = usr.email;
    this.usr.password = usr.password;
  }

  borrar(usr: { codigo: number; email: string; password: string }) {
    for (let i = 0; i < this.usuarios.length; i++)
      if (this.usuarios[i].codigo == usr.codigo) {
        this.usuarios.splice(i, 1);
        return;
      }
  }

  modificar() {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].codigo == this.usr.codigo) {
        this.usuarios[i].password = this.usr.password;
        this.usuarios[i].email = this.usr.email;
        return;
      }
    }
    alert('No existe.');
  }
}
