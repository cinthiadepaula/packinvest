import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Adicione essa importação
import { HomeComponent } from './app/home/home.component';
import { RegisterComponent } from './app/register/register.component';


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true, // Componente independente
  imports: [RouterModule]  // Importando o RouterModule aqui
})
export class AppComponent {}
