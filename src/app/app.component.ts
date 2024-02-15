import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LocalRoutes } from './interfaces/local-routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  routes: LocalRoutes[] = [
    {
      name: 'Método de Fabrica (Factory Method)',
      route: 'factory-method'
    }
  ]

  constructor(
    private router: Router
  ) {

  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
