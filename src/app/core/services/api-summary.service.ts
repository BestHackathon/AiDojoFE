import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSummaryService {

  private apiRoute = 'http://localhost:3000/summary';

  constructor(private http: HttpClient) {}

  getSummary(id: number): Observable<any> {
    return this.http.get(`${this.apiRoute}/${id}`);
  }
}
