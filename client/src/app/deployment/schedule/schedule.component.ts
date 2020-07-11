import { Component, OnInit, ViewChild } from '@angular/core';
import { ScheduleService } from '@app/core/services/schedule.service';
import { Schedule } from '@app/shared/models/schedule.model';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { ScheduleDialogComponent } from '@app/shared/dialog/schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  displayedColumns: string[] = ['details', 'customer', 'application', 'version', 'deployTime', 'deployStatus', 'jobName'];
  dataSource: MatTableDataSource<Schedule>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private scheduleService: ScheduleService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadAllSchedule();
  }

  refresh() {
    this.loadAllSchedule();
    this.dataSource.paginator = this.paginator;
  }

  loadAllSchedule() {
    this.scheduleService.getAllSchdule().subscribe(data => {
      this.dataSource = new MatTableDataSource<Schedule>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getDetails(): void {
    const dialogRef = this.dialog.open(ScheduleDialogComponent, {
      data: { name: 'test name' }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

