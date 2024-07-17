import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowcaseRoutes } from './showcase.routes';

const routes: Routes = ShowcaseRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseRoutingModule {}
