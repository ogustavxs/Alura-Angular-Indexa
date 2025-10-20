import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  @Input() nome: string = '';
  @Input() telefone: string = '';
  @Input() favorito: boolean = false
  @Output() deleteEvent = new EventEmitter<string>()
  @Output() starEvent = new EventEmitter<string>()

  sendClick() {
    this.deleteEvent.emit(this.nome)
  }
  sendStarEvent() {
    this.starEvent.emit(this.nome)
  }
}
