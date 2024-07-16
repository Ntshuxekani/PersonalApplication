import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    role: 'client'
  };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Registration successful', response);
        // Handle successful registration (e.g., redirect to login page)
      },
      error => {
        console.error('Registration failed', error);
        // Handle registration error
      }
    );
  }
}


