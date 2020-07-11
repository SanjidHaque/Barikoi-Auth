import {Router} from '@angular/router';
import { Component } from '@angular/core';
import {NotifierService} from 'angular-notifier';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthDataStorageService} from '../../services/auth-data-storage.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  hide = true;
  isDisabled = false;

  signInForm: FormGroup;

  constructor(private router: Router,
              private authDataStorageService: AuthDataStorageService,
              private notifierService: NotifierService) {
    this.initializeForm();
  }

  initializeForm() {
    this.signInForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });
  }

  getEmailErrorMessage() {
    return this.signInForm.controls['email'].hasError('required') ? 'You must enter your email!' :
      this.signInForm.controls['email'].hasError('email') ? 'Not a valid email!' :
        '';
  }

  signIn() {
    const email = this.signInForm.controls['email'].value;
    const password = this.signInForm.controls['password'].value;

    this.isDisabled = true;
    this.authDataStorageService.signIn(email, password)
      .subscribe((response: any) => {

        if (response.success) {
          localStorage.setItem('email', email);
          localStorage.setItem('token', response.data);
          this.router.navigate(['/home']);
        } else {
          this.isDisabled = false;
          this.notifierService.notify('default', 'Invalid email or password!')
        }

      });
  }

}
