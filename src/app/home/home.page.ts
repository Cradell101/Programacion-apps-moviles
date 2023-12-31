import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }
  goToRegistrationPage() {
    this.router.navigate(['/registration']); // Redirige a la página de registro
  }
}
