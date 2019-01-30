import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AboutProject() {
    this.router.navigate(['/about-project']);
  }

  AboutApp() {
    this.router.navigate(['/about-app']);
  }

  Developers() {
    this.router.navigate(['/developers']);
  }

}
