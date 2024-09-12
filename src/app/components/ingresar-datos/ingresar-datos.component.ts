import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario';

@Component({
  selector: 'app-ingresar-datos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingresar-datos.component.html',
  styleUrl: './ingresar-datos.component.css',
})
export class IngresarDatosComponent {
  nombre = '';
  apellido = '';

  @Output() eventoUsuario: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  //@Output() eventoUsuario = new EventEmitter<Usuario>();

  guardarDatos() {
    this.eventoUsuario.emit(new Usuario(this.nombre, this.apellido));

    this.nombre = '';
    this.apellido = '';
    // this.usuarios.push(new Usuario(this.nombre, this.apellido));
  }
}
