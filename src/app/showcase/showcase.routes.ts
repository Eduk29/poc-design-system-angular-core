import { Routes } from '@angular/router';

import { ShowcaseNavbarComponent } from './showcase-navbar/showcase-navbar.component';

export const ShowcaseRoutes: Routes = [{ path: 'navbar', component: ShowcaseNavbarComponent, pathMatch: 'full' }];
