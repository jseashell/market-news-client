import { Component, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-live-market',
  templateUrl: './live-market.component.html',
  styleUrls: ['./live-market.component.scss'],
})
export class LiveMarketComponent implements OnInit {
  private subject: WebSocketSubject<any>;
  messages: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.subject = webSocket({
      url: 'wss://2jhr8v1488.execute-api.us-east-1.amazonaws.com/dev',
    });

    this.subject.subscribe((data) => {
      this.messages.push(data.message);
    });
  }

  sendMessage() {
    this.subject.next({
      action: 'send',
      data: {
        message: `Hello from Angular!`,
      },
    });
  }
}
