import { Component } from '@angular/core';
import { Container } from './componentes/container/container';
import { Divisor } from './componentes/divisor/divisor';
import { Contato } from './componentes/contato/contato';

interface IContato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Container, Divisor, Contato, FormsModule],
})
export class App {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: IContato[] = agenda;

  filtroPorTexto: string = '';
  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): IContato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    });
  }

  filtrarContatosPorLetraInicial(letra: string): IContato[] {
    return this.filtrarContatosPorTexto().filter((c) => {
      return this.removerAcentos(c.nome).toLowerCase().startsWith(letra);
    });
  }
}
