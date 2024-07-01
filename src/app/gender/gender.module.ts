import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenderPage } from './gender.page';
import { GenderPageRoutingModule } from './gender-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GenderPageRoutingModule,
    HttpClientModule
  ],
  declarations: [GenderPage]
})
export class GenderPageModule {}
