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
  userInformations? : RegistrationForm;
  isRegisterOK = false;
  errorMessage?: string;

  registationForm =  this.formBuilder.group({
    nom : ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]+/)]],
    email: ['', [Validators.required, Validators.pattern(/\w+@\w+.\w+/), Validators.maxLength(30)]],
    numero :['', Validators.pattern(/^[0-9][1-9][0-9]{8}/)],
    password: ['', Validators.minLength(3)],
    isWhatsapp : [false]
  })

  constructor(public authService: AuthService, private formBuilder : FormBuilder){}

  enregistrementUtilisateur(){
    if (this.registationForm.valid){
      this.numeros?.set(this.registationForm.get('password')?.value!, this.registationForm.get('isWhatsapp')?.value!);
      this.userInformations = new RegistrationForm(
        this.nomControl?.value!,
        this.emailControl?.value!,
        this.numeros,
        this.passwordControl?.value!
      )
      this.authService.register(this.userInformations).subscribe( {
        next : data =>{
          console.log(data)
          this.isRegisterOK = true;
        },
        error : err =>{
          this.errorMessage = err.error;
          console.log(err);
          console.log(this.errorMessage);
          this.isRegisterOK = false;
        }
      });
    }
  }

  get nomControl(){return this.registationForm.get('nom')}

  get emailControl() { return this.registationForm.get('email')}

  get numeroControl() { return this.registationForm.get('numero')}

  get passwordControl() {return this.registationForm.get('password')}

  enregistrementOK() : void{
    this.isRegisterOK = true;
    setTimeout(
      () => {this.isRegisterOK = false},2000
    );
  }

}
