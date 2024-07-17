import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarModule } from '../components/navbar/navbar.module';
import { ShowcaseNavbarComponent } from './showcase-navbar/showcase-navbar.component';
import { ShowcaseRoutingModule } from './showcase-routing.module';

@NgModule({
  declarations: [ShowcaseNavbarComponent],
  imports: [CommonModule, NavbarModule, ShowcaseRoutingModule],
})
export class ShowcaseModule {}
