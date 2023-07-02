import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showToggle = false;
  public hideLanding = false;
  constructor(private router: Router){}

  hasRoute(route:string) {
    return this.router.url.includes(route);
  }

  uiUpdate($event:boolean) {
    this.hideLanding = $event;
    this.router.navigateByUrl('/main');
  }
}

