import { Component, inject } from '@angular/core';
import {
  Auth,
  Unsubscribe,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  authSubscription?: Unsubscribe;

  private auth = inject(Auth);
  private router = inject(Router);

  ngOnInit() {
    this.authSubscription = this.auth.onAuthStateChanged((auth) => {
      console.log(auth);
      if (auth?.email) {
        this.router.navigateByUrl('');
      }
    });
  }

  registro() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password);
    //Crear un usuario, automáticamente inicia sesión.
  }

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password);
  }

  ngOnDestroy() {
    if (this.authSubscription !== undefined) {
      this.authSubscription();
    }
  }
}
