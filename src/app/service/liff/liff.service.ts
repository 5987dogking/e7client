import { Injectable } from '@angular/core';
declare let liff: any;
@Injectable({
  providedIn: 'root'
})
export class LiffService {
  liffId = '';
  channelID = '';
  profile: LIFFUserProfile;
  profileDemo: LIFFUserProfile = {
    userId: 'U8284c94aee9cabea9c96cfa37123a6b3',
    displayName: '劉振維(Mark Liu)',
    pictureUrl: 'https://profile.line-scdn.net/0htukRqtJpK1pWKwRa2BxUDWpuJTchBS0SLkszbHcpIjh-SGoJOEptb3p5fG4sEm5fbUllOXsuJmx6',
    statusMessage: '海略商貿科技- 負責人',
  };
  locationHref = '';
  constructor(
  ) { }

  LIFFinit(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (location.hostname === 'localhost') {
        this.profile = this.profileDemo;
        resolve(true);
        return true;
      }
      console.log('this.locationHref', this.locationHref);
      if (document.getElementById('liffSDK')) {
        resolve(this.LIFFgetProfile());
        return true;
      }
      const liffSDK = document.createElement('script');
      liffSDK.onload = () => {
        resolve(this.LiffInit());
        return true;
      };
      liffSDK.src = 'https://static.line-scdn.net/liff/edge/2.1/sdk.js';
      liffSDK.id = 'liffSDK';
      document.head.appendChild(liffSDK);
    });
  }

  LiffInit(): Promise<any> {
    return new Promise((resolve, reject) => {
      liff.init({ liffId: this.liffId }).then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri: this.locationHref });
          reject(false);
        } else {
          resolve(this.LIFFgetProfile());
        }
      }).catch((err) => {
        alert('LIFF載入失敗 請截圖傳給工程師。liffid=>' + this.liffId + '_err=>' + JSON.stringify(err));
        reject(false);
      });
    });
  }

  LIFFgetProfile(): Promise<true> {
    return new Promise((resolve, reject) => {
      liff.getProfile().then((profile: LIFFUserProfile) => {
        this.profile = profile;
        resolve(true);
      }).catch((err) => {
        console.log('getProfile error', err);
        reject(false);
      });
    });
  }

  LIFFcloseWindow() {
    if (location.hostname === 'localhost') {
      console.log('關閉LIFF');
      return;
    }
    liff.closeWindow();
  }
}
