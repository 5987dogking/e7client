import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

declare global {
  interface Window { registration: any; }
}

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  currentMessage = new BehaviorSubject(null);
  // messaging: messaging.Messaging;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe(
      // tslint:disable-next-line: variable-name
      (_messaging) => {
        // this.messaging = _messaging;
        // _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        // _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    );
  }

  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userId] = token;
        // this.angularFireDB.object('fcmTokens/').update(data);
      });
  }

  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log('token', token);
        this.updateToken(userId, token);
        this.receiveMessage();
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  receiveMessage() {
    this.angularFireMessaging.onMessage(
      (payload) => {
        console.log('receiveMessage ', payload);
        this.currentMessage.next(payload);
        console.log(this.currentMessage);
      });
    this.angularFireMessaging.onBackgroundMessage((payload) => {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
      // Customize notification here
      const notificationTitle = 'Background Message Title';
      const notificationOptions = {
        body: 'Background Message body 989898.',
        icon: '/firebase-logo.png'
      };

      return self.registration.showNotification(notificationTitle,
        notificationOptions);
    });
  }
}
