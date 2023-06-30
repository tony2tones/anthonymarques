import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anthonymarques';
  public hideBtn = true;
  @Output() buttonPressed = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  mainNav() {
    this.buttonPressed.emit(true);
  }



}

