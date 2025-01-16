import { Component, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  parcelas: number = 0;
  valor: number = 0;
  resultado: number | null = null;

  constructor(private apiService: ApiService, private cdRef: ChangeDetectorRef) {}

  onSubmit() {
    if (this.parcelas && this.valor) {
      this.apiService.salvarParcelas(this.parcelas, this.valor).subscribe(
        (res: any) => {  // Usando any para a resposta da API
          console.log('Resposta da API:', res);
          this.resultado = res.resultado; // Acessando diretamente a propriedade 'resultado'
          this.cdRef.detectChanges(); // Força a detecção de mudanças
        },
        (err) => {
          console.error('Erro ao salvar parcelas:', err);
        }
      );
    } else {
      console.log('Preencha todos os campos!');
    }
  }
}
