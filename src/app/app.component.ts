import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  isAuthorised = true;
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Courses',
        link: './courses',
        authRequired: false,
        index: 0,
      },
      {
        label: 'Payments',
        link: './payments',
        authRequired: true,
        index: 1,
      },
      {
        label: 'FAQ',
        link: './faq',
        authRequired: false,
        index: 3,
      },
      {
        label: 'Profile',
        link: './profile',
        authRequired: true,
        index: 4,
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }
}
