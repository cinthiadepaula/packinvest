import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { RegisterComponent } from './app/register/register.component';

const bootstrap = () => bootstrapApplication(RegisterComponent, config);

export default bootstrap;
