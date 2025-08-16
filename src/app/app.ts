import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/core/nav-bar/nav-bar";
import { Home } from "./components/home/home";
import { User } from './user/user';
import { Registration } from './user/registration/registration';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Vexora';
}
