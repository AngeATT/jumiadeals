import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationForm } from './registationForm';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../shared/compteCss.css']
})
export class RegistrationComponent {
  
  numeros: Map<String, Boolean> = new Map<string, boolean>();
  isFormSubmit = false;
  userInformations? : RegistrationForm;
  isWhatsapp = false;

  registationForm =  this.formBuilder.group({
    nom : ['', Validators.name],
    email: ['', Validators.email],
    numero :['', Validators.pattern(/[0-9]{10}/)],
    password: ['', Validators.minLength(3)]
  })

  constructor(public authService: AuthService, private formBuilder : FormBuilder){
    
  }

  inscription(){
    this.isFormSubmit = true;
    if (this.registationForm.valid){
      this.numeros?.set(this.registationForm.get('password')?.value!, this.isWhatsapp);
      this.userInformations = new RegistrationForm(
        this.registationForm.get('nom')?.value!,
        this.registationForm.get('email')?.value!,
        this.numeros,
        this.registationForm.get('password')?.value!
      )
      this.authService.enregistrer(this.userInformations);
    }
  }

  isNameValid(): boolean{
    if (!this.isFormSubmit){
      return true;
    }else{
      return this.registationForm.get('nom')?.valid!;
    }
  }
  isEmailValid(): boolean{
    if (!this.isFormSubmit){
      return true;
    }else{
      return this.registationForm.get('email')?.valid!;
    }
  }
  isPasswordValid(): boolean{
    if (!this.isFormSubmit){
      return true;
    }else{
      return this.registationForm.get('password')?.valid!;
    }
  }
  isNumeroValid(): boolean{
    if (!this.isFormSubmit){
      return true;
    }else{
      return this.registationForm.get('numero')?.valid!;
    }
  }
}
