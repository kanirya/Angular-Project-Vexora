import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration implements OnInit {
  form!: ReturnType<FormBuilder['group']>;
  isSubmitted: boolean = false;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',
        [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/)]
      ],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): null => {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')
    if (password && confirmPassword && password.value != confirmPassword.value)
      confirmPassword?.setErrors({ passwordMismatch: true })
    else
      confirmPassword?.setErrors(null);
    return null;
  }

  hasDisplayableError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid)&&(this.isSubmitted||Boolean(control?.touched))
  }

  onSubmit() {
    console.log(this.form.value);
  }
}