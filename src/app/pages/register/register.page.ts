import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/intercafes/user';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userRegister: User = {}
  public confirmEmail: string;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  async register() {
    if (this.confirmEmail != this.userRegister.email) {
      console.log('the emails arent same');
      return;
    }

    try {
      await this.authService.register(this.userRegister);
      console.log('register with firebase is work!!!');
    } catch (error) {
      console.error();
    }
  }

  toLogin(){
    this.navCtrl.navigateBack('login');
  }

}
