import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class CadastroComponent {
  parcelas: number;
  valor: number;
  total: string;

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    const payload = { parcelas: this.parcelas, valor: this.valor };
    this.http.post<{ total: string }>('https://localhost:7065/Register/calcular', payload)
      .subscribe(response => {
        this.total = response.total;
      }, error => {
        alert("Erro ao calcular o valor.");
      });
  }
}
