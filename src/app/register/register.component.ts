import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  clientRegistrationForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder) {

  }

  get email(){
    return this.clientRegistrationForm.get('email');
  }
  get password(){
    return this.clientRegistrationForm.get('password');
  }

  register(){
    console.log(this.clientRegistrationForm.value)

    this.clientRegistrationForm.reset();
  }

}
