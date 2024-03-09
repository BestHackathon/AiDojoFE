import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFlashcardsService {

  private apiRoute = 'http://localhost:3000/flashcards';

  constructor(private http: HttpClient) {}

  getFlashcards(id1: number, id2: number): Observable<any> {
    return this.http.get(`${this.apiRoute}/${id1}/${id2}`);
  }
}
