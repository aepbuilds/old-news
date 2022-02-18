import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '6ddade89391d4393801cd37d79e488b9'

  public getNews() {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.API_KEY);
  }

  constructor(private httpClient: HttpClient) { }
}
