import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router : Router) {}

  title = 'angular-routing-app1';

  navigateToTheLinkA(link: string) {
    this.router.navigateByUrl(link).then(e=>{console.log(e)});
  }

  navigateToTheLinkB(link: string) {
    this.router.navigate([link]).then(e=>{console.log(e)});
  }
}
