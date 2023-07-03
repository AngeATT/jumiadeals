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
  errorMsg? = '';
  utilisateurForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]]
  });

  constructor(private router: Router, auth: AuthService, private fb: FormBuilder){
  }

  authenticate(): void{
    if(!this.utilisateurForm.valid){

    }
    console.log(this.utilisateurForm.valid);
  }
}
