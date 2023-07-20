import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCredentials } from '../services/user.credentials';
import { NotificationService } from '../notification-bar/notifcation.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['../shared/compteCss.css']
})
export class AuthComponent {
  email?: string;
  password?: string;

  isUserLogged = false;
  isLoginCorrect? : boolean;
  isSubmited : boolean = false;
  isEmailValid: boolean | undefined = true;
  isPasswordValid : boolean | undefined = true;
  errorMsg = 'Identifiants incorrectes';

  ngOnInit() : void{
    if (this.storageService.isLoggedIn()){
      this.isUserLogged = true;
    }
  }

  utilisateurForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
  });

  constructor(private router: Router, private auth: AuthService, private fb: FormBuilder,private notification : NotificationService, private storageService : StorageService) {
  }
  authenticate(): void {
    this.isSubmited = true;
    if (this.utilisateurForm.valid) {
       let userCredentials = new  UserCredentials(this.email,this.password);
      this.auth.login(this.email,this.password).subscribe({
        next : data =>{
          this.storageService.saveUser(new UserCredentials(this.email,this.password));
          this.router.navigateByUrl("/");
          console.log(data)
        },
        error : rep =>{
          this.notification.showNotifForXSeconds(this.errorMsg,5);
            console.log(rep)
        }
      })
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
