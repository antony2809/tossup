import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../draws/draws.module').then(m => m.DrawsModule)
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('../customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'tickets',
        loadChildren: () =>
          import('../tickets/tickets.module').then(m => m.TicketsModule)
      },
      {
        path: 'payments',
        loadChildren: () =>
          import('../payments/payments.module').then(m => m.PaymentsModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
