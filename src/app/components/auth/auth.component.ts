import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OtpCodeComponent } from './otp-code/otp-code.component';
import { SignupComponent } from './signup/signup.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { ChangePasswordSuccessComponent } from './change-password-success/change-password-success.component';
import { ReviewUsComponent } from './review-us/review-us.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, ReviewUsComponent, FooterComponent, ChangePasswordSuccessComponent, CreatePasswordComponent, ResetPasswordComponent, OtpCodeComponent, SignupComponent],
  templateUrl: './auth.component.html', 
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
