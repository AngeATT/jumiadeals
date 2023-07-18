import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCredentials } from '../services/user.credentials';
import { NotificationBarComponent } from '../notification-bar/notification-bar.component';
import { NotificationService } from '../notification-bar/notifcation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['../shared/compteCss.css']
})
export class AuthComponent {
  email?: string;
  password?: string;

  isLoginCorrect? : boolean;
  isSubmited : boolean = false;
  isEmailValid: boolean | undefined = true;
  isPasswordValid : boolean | undefined = true;
  errorMsg?= '';

  utilisateurForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
  });

  constructor(private router: Router, public auth: AuthService, private fb: FormBuilder,public notification : NotificationService) {
  }
  authenticate(): void {
    this.isSubmited = true;
    if (this.utilisateurForm.valid) {
       let userCredentials = new  UserCredentials(this.email,this.password);
       let isLoginOk = false;
      this.auth.login(this.email,this.password).subscribe({
        next : data =>{
          console.log(data)

        },
        error : rep =>{
            console.log(rep)
        }
       
      });
        
      if (false){
        this.isLoginCorrect = true;
        //this.router.navigateByUrl("/");
      }else{
        this.notification.showNotifForXSeconds("Identifiants incorrects",5);
        this.isLoginCorrect = false;
      }
    }else{
      this.isEmailValid = this.emailValid()
      this.isPasswordValid = this.passwordValid();
      this.isLoginCorrect = undefined;
    }
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
