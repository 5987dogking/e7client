import { Component, OnInit } from '@angular/core';
import { UserService, SchoolUserProfile, NotifyData } from 'src/app/service/user/user.service';
import { LiffService } from 'src/app/service/liff/liff.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-line-notify',
  templateUrl: './user-line-notify.component.html',
  styleUrls: ['./user-line-notify.component.scss']
})
export class UserLineNotifyComponent implements OnInit {
  notifyLink = '';
  constructor(
    public userService: UserService,
    public liffService: LiffService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    console.log('userService.schoolUserProfile', this.userService.schoolUserProfile);
    this.userService.userDataGet().then(
      async (schoolUserProfile: SchoolUserProfile) => {
        if (schoolUserProfile.access_token === undefined) {
          const urlParams = new URLSearchParams(window.location.search);
          const code = urlParams.get('code');
          if (code !== null) {
            this.notifyToken(code);
          } else {
            console.log('no code');

            const notifyData: NotifyData = await this.userService.notifyDataGet();
            console.log('notifyData', notifyData);
            this.notifyLink = 'https://notify-bot.line.me/oauth/authorize?response_type=code&scope=notify';
            this.notifyLink += `&client_id=${notifyData.client_id}`;
            this.notifyLink += `&redirect_uri=${location.origin}`;
            this.notifyLink += `&state=page=user/userLineNotify,channelID=${this.liffService.channelID}`;
          }
        }
      }
    );
  }

  notifyToken(code: string) {
    const notifyData = {
      action: 'notifyToken',
      source: this.userService.schoolUserProfile,
      channelID: this.liffService.channelID,
      code,
    };
    this.http.post('https://us-central1-review-clean02.cloudfunctions.net/app/webhook/1604598759', notifyData).subscribe(
      (v: any) => {
        console.log('notifyToken v', v);
        this.userService.schoolUserProfile.access_token = v.access_token;
      },
      (e) => { console.log('notifyToken e', e); },
    );
  }

  notifyTest(message: string) {
    const notifyData = {
      action: 'notifyTest',
      source: this.userService.schoolUserProfile,
      channelID: this.liffService.channelID,
      message
    };
    this.http.post('https://us-central1-review-clean02.cloudfunctions.net/app/notifyTest', notifyData).subscribe(
      (v) => { console.log('notifyToken v', v); },
      (e) => { console.log('notifyToken e', e); },
    );
  }
}
