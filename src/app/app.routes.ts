import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CreatePasswordComponent } from './components/auth/create-password/create-password.component';
import { OtpCodeComponent } from './components/auth/otp-code/otp-code.component';
import { ChangePasswordSuccessComponent } from './components/auth/change-password-success/change-password-success.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ReviewUsComponent } from './components/auth/review-us/review-us.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },

    {
        path: 'auth/login',
        component: LoginComponent,
    },

    {
        path: 'auth/signup',
        component: SignupComponent,
    },

    {
        path: 'auth/create-password',
        component: CreatePasswordComponent,
    },

    {
        path: 'auth/verify-otp',
        component: OtpCodeComponent,
    },

    {
        path: 'auth/password-reset-success',
        component: ChangePasswordSuccessComponent,
    },
    
    {
        path: 'auth/reset-password',
        component: ResetPasswordComponent,
    },
    
    {
        path: 'auth/review',
        component: ReviewUsComponent,
    },
];

