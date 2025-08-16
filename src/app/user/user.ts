import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Registration } from "./registration/registration";

@Component({
  selector: 'app-user',
  imports: [CommonModule, Registration],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

}
