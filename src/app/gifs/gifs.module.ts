import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent],
  exports:[HomePageComponent],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
