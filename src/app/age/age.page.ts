import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage {
  nombre: string = '';
  edad: number | null = null;
  loading: boolean = false;

  constructor(private http: HttpClient, private loadingController: LoadingController) {}

  async predictAge() {
    this.loading = true;
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      spinner: 'circles',
    });
    await loading.present();

    this.http.get(`https://api.agify.io/?name=${this.nombre}`).subscribe(
      (data: any) => {
        this.edad = data.age;
        this.loading = false;
        loading.dismiss();
      },
      (error) => {
        console.error('Error fetching age prediction:', error);
        this.loading = false;
        loading.dismiss();
      }
    );
  }
}
