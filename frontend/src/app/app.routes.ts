import { Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {ConsultComponent} from './consult/consult.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'consult', component:ConsultComponent },

];
