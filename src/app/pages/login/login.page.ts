import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/intercafes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {};

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  async login(){
    try {
      await this.authService.login(this.userLogin);
      console.log('login with firebase is work!!!')
    } catch (error) {
      console.error();
    }
  }

}
