import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('MesEvenements');
  constructor(public auth: Auth,private router:Router) { }

  ngOnInit() {
    let isloggedin: string;
    let loggedUser: string;
    isloggedin = localStorage.getItem('isloggedIn')!;
    loggedUser = localStorage.getItem('loggedUser')!;
    if (isloggedin != "true" || !loggedUser)
      this.router.navigate(['/login']);
    else
      this.auth.setLoggedUserFromLocalStorage(loggedUser);
  }

  onLogout() {
    this.auth.logout();
  }

}
