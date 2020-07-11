import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeploymentComponent } from './deployment.component';
import { AuthGuard } from '../core/authentication/auth.guard';
import { ClusterComponent } from './cluster/cluster.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PackageComponent } from './package/package.component';
import { ClientsComponent } from './clients/clients.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {
    path: 'deployment',
    component: DeploymentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'cluster', component: ClusterComponent },
          { path: 'schedule', component: ScheduleComponent },
          { path: 'package', component: PackageComponent },
          { path: 'manager', component: ManagerComponent },
          { path: 'clients', component: ClientsComponent },
        //  { path: '', component: ClusterComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DeploymentRoutingModule { }
