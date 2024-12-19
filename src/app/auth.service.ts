import { Injectable } from '@angular/core';

import { AngularFireAuth  } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

  async login(email: string, password: string) {
    try {
      const user = await this.fireAuth.signInWithEmailAndPassword(email, password);
      console.log('Logged in as:', user);

      this.isUserLoggedIn = true;
    } catch (error) {
      console.error('Error logging in:', error);
      this.isUserLoggedIn = false;
    }
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
    return this.isUserLoggedIn;
  }

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const credential = await this.fireAuth.signInWithPopup(provider);
      console.log('Logged in with Google:', credential);
      this.isUserLoggedIn = true;
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn'); 
    this.fireAuth.signOut();
  }

  constructor(private fireAuth: AngularFireAuth) { }
}
