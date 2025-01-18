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
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'signup',
                component: SignupComponent,
            },
            {
                path: 'create-password',
                component: CreatePasswordComponent,
            },
            {
                path: 'verify-otp',
                component: OtpCodeComponent,
            },
            {
                path: 'password-reset-success',
                component: ChangePasswordSuccessComponent,
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent,
            },
            {
                path: 'review',
                component: ReviewUsComponent,
            },
        ],
    },
];
