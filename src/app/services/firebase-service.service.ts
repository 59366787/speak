import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ProfileInfo } from '../models/profile-info';

@Injectable()
export class FirebaseService {
  constructor(private afAuth: AngularFireAuth) { }

  loginWithFacebook(): Promise<ProfileInfo> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
