import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationForm } from './registationForm';
import { NotificationService } from '../notification-bar/notifcation.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../shared/compteCss.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public authService: AuthService, private formBuilder : FormBuilder, public notifService : NotificationService, public router : Router){}

  numeros: Map<String, Boolean> = new Map<string, boolean>();
  userInformations? : RegistrationForm;
  errorMessage?: string;
  registationForm! : FormGroup;

  ngOnInit(): void {
    this.registationForm =  this.formBuilder.group(
      {
      nom : [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z\s]+/)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/\w+@\w+.\w+/),
          Validators.maxLength(30)
        ]
      ],
      numero :[
        '',
        Validators.pattern(/^[0-9][1-9][0-9]{8}/)
      ],
      password: [
        '',
        [
          Validators.minLength(3),
          Validators.required
        ]
      ],
      isWhatsapp : []
    }
    )
  }


  messageEnregistrementOk = "Enregistrement effectué avec succès. Consultez votre mail pour activer votre compte.";
  messageErreurEnregistrement = "Erreur lors de l'inscription, Email déjà utilisée";

  enregistrementUtilisateur(){
    if (this.registationForm.valid){
      this.numeros?.set(this.registationForm.get('password')?.value!, this.registationForm.get('isWhatsapp')?.value!);
      this.userInformations = new RegistrationForm(
        this.nomControl?.value!,
        this.emailControl?.value!,
        this.passwordControl?.value!,
        this.numeroControl?.value!,
        this.isWhaControl?.value!
      )
      this.authService.register(this.userInformations).subscribe( {
        next : data =>{
          console.log(data);
          this.router.navigateByUrl("login");
          this.notifService.showNotifForXSeconds(this.messageEnregistrementOk,20,true);
        },
        error : err =>{
          this.errorMessage = err.error;
          console.log(err);
          this.notifService.showNotifForXSeconds(this.messageErreurEnregistrement,20,false);
          console.log(this.errorMessage);
        }
      });

    }else{
      this.registationForm.markAllAsTouched();
    }
  }

  get nomControl(){return this.registationForm.get('nom')}

  get emailControl() { return this.registationForm.get('email')}

  get numeroControl() { return this.registationForm.get('numero')}

  get passwordControl() {return this.registationForm.get('password')}

  get isWhaControl() {return this.registationForm.get('isWhatsapp')}

}
