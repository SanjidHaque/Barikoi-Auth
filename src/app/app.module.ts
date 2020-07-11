import { NgModule } from '@angular/core';
import {NotifierModule} from 'angular-notifier';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AuthGuard} from './auth/auth.guard';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthInterceptor} from './auth/auth.interceptor';
import { HomeComponent } from './components/home/home.component';
import {AngularMaterialModule} from './modules/angular-material.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {AuthDataStorageService} from './services/auth-data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'bottom',
          distance: 12,
          gap: 10
        }
      },
      behaviour: {
        autoHide: 5000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      }
    })
  ],
  providers: [
    AuthGuard,
    AuthDataStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
