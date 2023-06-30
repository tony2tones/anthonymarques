import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  
  public hideBtn = true;
  @Output() buttonPressed = new EventEmitter();
  constructor() { }
  mainNav():void {
    this.buttonPressed.emit(true);
  }

}


