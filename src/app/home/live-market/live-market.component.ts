import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-live-market',
  templateUrl: './live-market.component.html',
  styleUrls: ['./live-market.component.scss'],
})
export class LiveMarketComponent implements OnInit {
  ws: string = 'No response';

  constructor() {}

  ngOnInit(): void {
    const subject = webSocket('wss://1jl4s4n5z4.execute-api.us-east-1.amazonaws.com/dev/connectHandler');
    subject.subscribe((msg) => {
      this.ws = JSON.stringify(msg);
      console.log('message received:\n' + this.ws);
    });
  }
}
