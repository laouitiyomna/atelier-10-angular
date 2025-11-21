import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { Auth } from './services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('MesEvenements');

  constructor(public auth: Auth, private router: Router) { }

  ngOnInit() {
    const loggedUser = localStorage.getItem('loggedUser');
    const isLoggedIn = localStorage.getItem('isloggedIn') === 'true';

    if (!isLoggedIn || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.auth.setLoggedUserFromLocalStorage(loggedUser);
    }
  }

  onLogout() {
    this.auth.logout();
  }
}
