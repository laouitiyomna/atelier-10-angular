import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private router: Router) { }

  // Liste des utilisateurs
  users: User[] = [
    { username: "admin", password: "123", roles: ['ADMIN'] },
    { username: "yomna", password: "123", roles: ['USER'] }
  ];

  public loggedUser: string = '';
  public isloggedIn: boolean = false;
  public roles: string[] = [];

  // Login
  SignIn(user: User): boolean {
    const foundUser = this.users.find(u => u.username === user.username && u.password === user.password);
    if (foundUser) {
      this.loggedUser = foundUser.username;
      this.isloggedIn = true;
      this.roles = foundUser.roles;
      localStorage.setItem('loggedUser', this.loggedUser);
      localStorage.setItem('isloggedIn', 'true');
      return true;
    }
    return false;
  }

  // Logout
  logout() {
    this.loggedUser = '';
    this.roles = [];
    this.isloggedIn = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', 'false');
    this.router.navigate(['/login']);
  }

  // Vérifier si admin
  isAdmin(): boolean {
    return this.roles.includes('ADMIN');
  }

  // Récupérer utilisateur depuis localStorage
  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
    localStorage.setItem('isloggedIn', 'true');
  }

  getUserRoles(username: string) {
    const user = this.users.find(u => u.username === username);
    this.roles = user ? user.roles : [];
  }
}
