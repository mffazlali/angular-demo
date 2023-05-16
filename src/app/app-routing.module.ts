import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    loadChildren: () =>
      import('./pages/home/home-routing.module').then((m) => m.HomeRoutingModule),
  },
  {
    path: 'components',
    pathMatch:'full',
    loadChildren: () =>
      import('./components/components.module').then((m) => m.ComponentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
