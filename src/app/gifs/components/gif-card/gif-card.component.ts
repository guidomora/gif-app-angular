import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gif-card',
  templateUrl:'./gif-card.component.html',
})

// OnInit es de angular y sirve para cuando se inicializa el componente
export class GifCardComponent implements OnInit{
  @Input()
  
  public gif!: Gif
  
  
  ngOnInit(): void {
    // si gif es undefined lanza error
    if (!this.gif) throw new Error('Gif property required')
  }
}
