import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { timer } from 'rxjs';
import { NotificationData } from '@core/notification.model';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notification-visibility', [
      state('hidden', style(
        {
          right: '-20%'
        })),
      state('visible', style(
        {
          right: '*'
        })),
      transition('hidden => visible', animate('500ms ease-in')),
      transition('visible => hidden', animate('500ms ease-out'))
    ])
  ]
})
export class NotificationComponent implements OnInit {
  public notificationData: NotificationData;
  public visibility: string = 'hidden';
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notification.subscribe((messageData: NotificationData) => {
      this.notificationData = messageData;
      this.visibility = 'visible';
      timer(3000).subscribe(() => this.visibility = 'hidden');
    });
  }

}
