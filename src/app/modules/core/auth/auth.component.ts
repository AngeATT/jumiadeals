import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginCorrect : undefined | boolean;
  isSubmited : boolean = false;
  isEmailValid: boolean | undefined = true;
  isPasswordValid : boolean | undefined = true;
  errorMsg?= '';

  utilisateurForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
  });



  constructor(private router: Router, auth: AuthService, private fb: FormBuilder) {
  }
  authenticate(): void {
    this.isSubmited = true;
    if (!this.utilisateurForm.valid) {
      this.isEmailValid = this.emailValid()
      this.isPasswordValid = this.passwordValid();
      this.isLoginCorrect = undefined;
    }else{
      //logic du back si le gar se connecte good on le renvoie sur 
      this.router.navigateByUrl("/");
      if (true){
        this.isLoginCorrect = true;
      }else{
        this.isLoginCorrect = false;
      }
    }
    console.log(this.utilisateurForm.get('email')?.valid);
  }

  emailValid() : boolean | undefined{
    if (this.isSubmited){
      return !this.utilisateurForm.get('email')?.valid;
    }else{
      return false;
    }
  }
  
  passwordValid() : boolean | undefined{
    if (this.isSubmited){
      return !this.utilisateurForm.get('password')?.valid;
    }else{
      return false;
    }
  }

}
