import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeploymentComponent } from './deployment.component';
import { DeploymentRoutingModule } from './deployment-routing.module';
import { ClusterComponent } from './cluster/cluster.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PackageComponent } from './package/package.component';
import { ManagerComponent } from './manager/manager.component';
import { ClientsComponent } from './clients/clients.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatPaginatorModule,
         MatToolbarModule,
         MatSidenavModule,
         MatListModule,
         MatButtonModule,
         MatIconModule,
         MatCardModule,
         MatTabsModule,
         MatFormFieldModule,
         MatInputModule,
         MatCheckboxModule,
         MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [DeploymentComponent, ClusterComponent, ScheduleComponent, PackageComponent, ManagerComponent, ClientsComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    TranslateModule,
    ScrollingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    DeploymentRoutingModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatGridListModule,
    FlexLayoutModule,
    SweetAlert2Module
  ]
})
export class DeploymentModule { }
