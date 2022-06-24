import { Component } from '@angular/core';
import { UserService } from '@services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private user: UserService) {}

  signIn() {
    this.user.signIn();
  }
}
