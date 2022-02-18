import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'old-news';

  news: any;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getNews().subscribe( data => {
      this.news = data['articles'];
    });
  }
}
