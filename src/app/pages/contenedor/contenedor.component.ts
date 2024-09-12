import { Component } from '@angular/core';
import { IngresarDatosComponent } from '../../components/ingresar-datos/ingresar-datos.component';
import { MostrarDatosComponent } from '../../components/mostrar-datos/mostrar-datos.component';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [IngresarDatosComponent, MostrarDatosComponent, FormsModule],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css',
})
export class ContenedorComponent {
  usuarios: Usuario[] = [new Usuario('Agus', 'F'), new Usuario('Facundo', 'C')];

  recibirUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }
}
