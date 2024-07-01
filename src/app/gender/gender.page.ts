import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage {
  nombre: string = '';
  genero: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient, private loadingCtrl: LoadingController) {}

  async predictGender() {
    this.loading = true;

    try {
      const loadingElement = await this.loadingCtrl.create({
        message: 'Cargando...',
        spinner: 'circles'
      });
      await loadingElement.present();

      this.http.get(`https://api.genderize.io/?name=${this.nombre}`).subscribe((data: any) => {
        this.genero = data.gender;
        this.loading = false;
        loadingElement.dismiss();
      });
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }
}
