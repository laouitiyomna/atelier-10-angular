import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styles: [``]
})
export class Login implements OnInit {
  user: User = new User();
  erreur: number = 0;

  constructor(private authService: Auth, private router: Router) { }

  ngOnInit(): void { }

  onLoggedin() {
    const isValidUser = this.authService.SignIn(this.user);
    if (isValidUser) {
      this.router.navigate(['/']); 
    } else {
      this.erreur = 1;
    }
  }
}
