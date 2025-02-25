import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  returnUrl: '/login';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onLogout() {
    this.authService.logout();
  }

}
