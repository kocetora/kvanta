import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { PaymentsComponent } from './payments/payments.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import(`./auth/auth.module`).then((module) => module.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
