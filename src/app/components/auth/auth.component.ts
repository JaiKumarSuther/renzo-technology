import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, FooterComponent, ResetPasswordComponent],
  templateUrl: './auth.component.html', 
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
