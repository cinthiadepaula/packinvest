import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7065/'; // URL da sua API local

  constructor(private http: HttpClient) {}

  // Exemplo de chamada GET (substitua conforme necessário)
  getExampleData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?id=1`);
  }

  // Exemplo de chamada POST (substitua conforme necessário)
  postExampleData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}exemplo`, data);
  }
}
