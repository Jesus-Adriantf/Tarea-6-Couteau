import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  logo: string = '';
  articles: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.logo = 'assets/logo.png'; 
    this.fetchArticles();
  }

  fetchArticles() {
    const url = 'https://www.laprensard.com/wp-json/wp/v2/posts?per_page=3&_embed';

    this.http.get(url).subscribe((data: any) => {
      this.articles = data.map((article: any) => ({
        title: article.title.rendered,
        summary: article.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""), 
        link: article.link,
        image: article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia'][0].source_url : null 
      }));
      this.loading = false; 
    });
  }
}
