import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { CookieService } from 'ngx-cookie';
@NgModule({
  declarations: [
    AppComponent,
    ServerErrorComponent,
    NotFoundComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
