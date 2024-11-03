import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  private apiUrl = 'https://8613zxj0wl.execute-api.us-east-1.amazonaws.com/Home/Home';

  constructor(private http: HttpClient) {}

  getHomepageData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
