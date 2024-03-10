import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRecommendationService {

  private apiRoute = 'http://localhost:3000/recomended';

  constructor(private http: HttpClient) {}

  getRecommendations(id: number): Observable<any> {
    return this.http.get(`${this.apiRoute}/${id}`);
  }
}
