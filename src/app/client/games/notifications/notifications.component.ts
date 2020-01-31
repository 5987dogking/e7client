import { Component, OnInit } from '@angular/core';
import { FcmService } from 'src/app/service/fcm/fcm.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  message;
  constructor(
    private messagingService: FcmService,
  ) { }

  ngOnInit() {
    const userId = 'user001';
    this.messagingService.requestPermission(userId);
    // this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

}
