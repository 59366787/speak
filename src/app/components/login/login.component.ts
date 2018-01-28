import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase-service.service';
import { ProfileInfo } from '../../models/profile-info';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  loginFacebook() {
    this.firebaseService.loginWithFacebook().then((data: ProfileInfo) => {
      console.log('success');
      console.log(data.user.displayName);
    }, (responseFail: any) => {
      console.log('fail : ' + responseFail);
      console.log(`fail: ${responseFail}`);
      console.log('fail');
      console.log(responseFail);
    });
  }

}
