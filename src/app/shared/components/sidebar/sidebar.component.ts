import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { GifService } from '../../../gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl:'./sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {


   constructor(
    // inyeccion de servicio
    private gifService:GifService
   ) {}

   searchTag(tag:string):void{
    this.gifService.searchTag(tag)
   }

   get tags():string[] {
    return this.gifService.tagsHistory
   }


 }
