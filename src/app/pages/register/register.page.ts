import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/intercafes/user';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userRegister: User = {}
  public confirmEmail: string;
  public loading: any;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  async register() {
    await this.presentLoading();

    if (this.confirmEmail != this.userRegister.email) {
      this.presentToast('The emails arent same');
      return;
    }

    try {
      await this.authService.register(this.userRegister);
      console.log('register with firebase is work!!!');
    } catch (error) {
      this.presentToast(error.message);
    } finally{
      this.loading.dismiss();
    }
  }

  toLogin(){
    this.navCtrl.navigateBack('login');
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
