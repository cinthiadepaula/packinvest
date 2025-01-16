import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consult',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  id: number = 0;
  nome: string = '';
  erro:boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const idParam = params['id'];

      if (idParam && !isNaN(idParam)) {
        this.id = +idParam;
        console.log('ID capturado:', this.id);
        this.onBuscar();
      } else {
        console.error('ID inválido:', idParam);
      }
    });
  }

  onBuscar(): void {
    this.apiService.buscarNome(this.id).subscribe({
      next: (res) => {
        this.nome = res;
        this.erro = false;

      },
      error: (err) => {
        if (err.status === 404) {
          this.nome = '';
          this.erro = true;

          console.log('Nome não cadastrado');
        } else {

          console.error('Erro ao buscar nome', err);
          this.erro = false;
        }
      },
    });
  }
}
