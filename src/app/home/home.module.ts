import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MastheadModule } from '../components/masthead/masthead.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MastheadModule, NavbarModule],
})
export class HomeModule {}
