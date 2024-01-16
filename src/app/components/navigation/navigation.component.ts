import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavHeaderComponent {
  @Output() messageBus = new EventEmitter<string>();
  @ViewChild('navbar') navbarRef: ElementRef | undefined;

  constructor(private router: Router) { }

  goDown(sectionId:string) {
    console.log('is From the header ',sectionId)
    this.messageBus.emit(sectionId);
    this.closeMobileMenu();
  }

  closeMobileMenu() {
    const navbar = document.getElementById('navbar') as HTMLElement;
    // navbar.onblur(); // Remove focus from the navbar
  }


}
