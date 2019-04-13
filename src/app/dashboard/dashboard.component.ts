import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ls : LocalstorageService, private router: Router) { }

  ngOnInit() {
  }

  signout()
  {
    this.ls.removeIsLoggedIn();
    this.router.navigate(['/login']);
  }
}
