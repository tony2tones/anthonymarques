import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavHeaderComponent {
  @Output() messageBus = new EventEmitter<string>();
  constructor(private router: Router) { }

  goDown(sectionId:string) {
    console.log('is From the header ',sectionId)
    this.messageBus.emit(sectionId);
  }

}
