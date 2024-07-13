import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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

   get tags(){
    return this.gifService.tagsHistory
   }
 }
