import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ClusterDialogComponent } from './dialog/cluster-dialog/cluster-dialog.component';
import { ScheduleDialogComponent } from './dialog/schedule-dialog/schedule-dialog.component';
import { MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatChipsModule,
  MatIconModule,
  MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [LoaderComponent, ClusterDialogComponent, ScheduleDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SweetAlert2Module,
    MatChipsModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule
  ],
  entryComponents:[ClusterDialogComponent, ScheduleDialogComponent],
  exports: [LoaderComponent, ClusterDialogComponent]
})
export class SharedModule { }
