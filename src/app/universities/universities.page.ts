import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.page.html',
  styleUrls: ['./universities.page.scss'],
})
export class UniversitiesPage {
  pais: string = '';
  universidades: any[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient, private loadingController: LoadingController) {}

  async searchUniversities() {
    this.loading = true;
    const loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await loading.present();

    this.http.get(`http://universities.hipolabs.com/search?country=${this.pais}`).subscribe((data: any) => {
      this.universidades = data;
      this.loading = false;
      loading.dismiss();
    }, error => {
      this.loading = false;
      loading.dismiss();
    });
  }
}
