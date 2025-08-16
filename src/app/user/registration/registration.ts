import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
  form: ReturnType<FormBuilder['group']>; 

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: [''],
      email:[''],
      password:[''],
      confirmPassword:['']

    });
  }

  onSubmit(){
    console.log(this.form.value);
  }
}
