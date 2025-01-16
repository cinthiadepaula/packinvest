import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7065/Register';  // URL da sua API local


  constructor(private http: HttpClient) {}

  // Método para salvar parcelas e calcular
  salvarParcelas(parcelas: number, valor: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/calcular`, { parcelas, valor });
  }


  buscarNome(id: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/consultar?id=${id}`,{responseType: 'text' as 'json'});
  }

}

