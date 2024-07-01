import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgePage } from './age.page';
import { AgePageRoutingModule } from './age-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AgePageRoutingModule,
    HttpClientModule
  ],
  declarations: [AgePage]
})
export class AgePageModule {}
