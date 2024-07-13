import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';



// Este no hace falta exportarlo porque solo lo vamos a usar en home-page
@Component({
  selector: 'gif-search-box',
  template:`
  <h5>Buscar</h5>
  <input 
  type="text" 
  class="form-control" 
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput>
  `
})

// el .enter hace que solo se mande el texto cuando se da enter
export class SearchBoxComponent {

  // ViewChild sirve para poder tomar una referencia local
  @ViewChild('txtTagInput') // txtTagInput es el id que le pusimos


  public tagInput!: ElementRef<HTMLInputElement> //referencia de que es un elemento html
  constructor(
    private gifService:GifService
  ) {}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value
    this.gifService.searchTag(newTag)
    this.tagInput.nativeElement.value = '' // para resetear
  }
 }
