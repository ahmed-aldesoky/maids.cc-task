import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/components/layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './core/components/layouts/home-layout/home-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthModule),
        // //canActivate: [AuthGuard]
      },
    ],
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then(
            (m) => m.HomeModule
          ),
        // canActivate: [AuthGuard],
      },
    ],
  },
  // { path: '**', pathMatch: 'full', component: DashboardLayoutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
