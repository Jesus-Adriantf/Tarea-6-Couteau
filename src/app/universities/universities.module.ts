import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniversitiesPage } from './universities.page';
import { UniversitiesPageRoutingModule } from './universities-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UniversitiesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [UniversitiesPage]
})
export class UniversitiesPageModule {}
