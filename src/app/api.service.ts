import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '########'

  public getNews() {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.API_KEY);
  }

  constructor(private httpClient: HttpClient) { }
}
