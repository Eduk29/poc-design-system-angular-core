import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() title: string = '';
  @Input() showMenu: boolean = false;

  constructor() {}

  public dispatchOpenMenu(): void {
    console.log('Open/close menu');
  }
}
