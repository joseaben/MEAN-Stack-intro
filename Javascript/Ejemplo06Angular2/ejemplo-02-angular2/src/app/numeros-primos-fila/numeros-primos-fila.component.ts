import { Component, OnInit,Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-numeros-primos-fila',
  templateUrl: './numeros-primos-fila.component.html',
  styleUrls: ['./numeros-primos-fila.component.css'],
  //inputs: ['numero']
  outputs:['eventoMostrar']
})
export class NumerosPrimosFilaComponent implements OnInit {

  @Input() private numero: number = 0;
  private  mostrarContenido: boolean = false;
  private eventoMostrar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  enviarNotificacion(): void{
    this.mostrarContenido = !this.mostrarContenido;
    this.eventoMostrar.emit(this.mostrarContenido);
    console.log("evento enviado");

  }


}
