import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: ``
})
export class Login implements OnInit {
  user = new User();
  erreur=0;

  constructor(private authService: Auth, private router: Router) { }

  ngOnInit(): void {

  }

  onLoggedin() { console.log(this.user);
     let isValidUser: Boolean = this.authService.SignIn(this.user);
      if (isValidUser) this.router.navigate(['/']); 
      else {
        //alert('Login ou mot de passe incorrecte!');
        this.erreur=1;}
      }
}
