import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() { 
    // Simulated login check (replace with your actual login logic)
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful!');
      this.router.navigate(['/gallery']); // Redirect to gallery page
    } else {
      alert('Invalid credentials');
    }
  }
}
