import { Routes } from '@angular/router';
import { FactoryMethodComponent } from './views/factory-method/factory-method.component';
import path from 'path';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'factory-method',
        component: FactoryMethodComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
