import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  classtoggle = false;
  doAnimation = false;
  @ViewChild('profileCard')
  elementRef!: ElementRef;

  constructor(private renderer: Renderer2, private viewporter: ViewportScroller) { }

  @HostListener('click', ['$event'])
  scrollToAnchor(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);

    if (sectionId === 'home') {
      sectionElement?.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
