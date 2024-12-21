import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

import 'zone.js/plugins/zone-patch-rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MyBlogDemo';
  isUserLoggedIn = false;

  constructor(private authService: AuthService, private router : Router) {}

  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
      if( storeData != null && storeData == "true")
        this.isUserLoggedIn = true;
      else
        this.isUserLoggedIn = false;
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.router.navigate(["/"]);
  }
}
