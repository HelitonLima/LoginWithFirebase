import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/intercafes/user';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {};
  public loading: any;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
      console.log('login with firebase is work!!!')
    } catch (error) {
      this.presentToast(error.message);
    } finally{
      this.loading.dismiss();
    }
  }

  toRegister() {
    this.navCtrl.navigateForward('register');
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
