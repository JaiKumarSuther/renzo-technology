import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OtpCodeComponent } from './otp-code/otp-code.component';
import { SignupComponent } from './signup/signup.component';
import { CreatePasswordComponent } from './create-password/create-password.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, FooterComponent, CreatePasswordComponent, ResetPasswordComponent, OtpCodeComponent, SignupComponent],
  templateUrl: './auth.component.html', 
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
