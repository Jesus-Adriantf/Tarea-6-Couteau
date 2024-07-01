import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weather: any;
  loading: boolean = false;

  constructor(private http: HttpClient, private loadingController: LoadingController) {}

  ngOnInit() {
    this.getWeather();
  }

  async getWeather() {
    this.loading = true;
    const apiKey = 'd46eab0b565cd49cce761a550ab1a72a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Dominican%20Republic&units=metric&appid=${apiKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.weather = data;
      this.loading = false;
    }, error => {
      console.error(error);
      this.loading = false;
    });
  }
}
