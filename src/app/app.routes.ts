import { Routes } from '@angular/router';
import { FactoryMethodComponent } from './views/factory-method/factory-method.component';
import path from 'path';
import { AppComponent } from './app.component';
import { AbstractFactoryComponent } from './views/abstract-factory/abstract-factory.component';

export const routes: Routes = [
    {
        path: 'factory-method',
        component: FactoryMethodComponent
    },
    {
        path: 'abstract-factory',
        component: AbstractFactoryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
