import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
// import { MenuComponent } from './menu/menu.component';
// import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '', 
    component: LandingPageComponent
  },
  // {path: 'menu', component: MenuComponent},
  // {path: 'navbar', component: NavbarComponent},
  {
    path: 'panel',
    loadChildren: () => 
      import('./pages/layout.module').then((m) => m.LayoutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
