import { Component, Input } from '@angular/core';
import { Usuario } from '../../classes/usuario';

@Component({
  selector: 'app-mostrar-datos',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-datos.component.html',
  styleUrl: './mostrar-datos.component.css',
})
export class MostrarDatosComponent {
  // @Input() usuarios?: Usuario[];
  @Input() usuariosInput: Usuario[] = [];
  @Input() cadena: string = '';
  @Input() numero: number = 0;
}
