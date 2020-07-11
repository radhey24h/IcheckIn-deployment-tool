import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClusterDialogComponent } from './cluster-dialog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DeploymentRoutingModule } from '@app/deployment/deployment-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DeploymentComponent } from '@app/deployment/deployment.component';
import { ClusterComponent } from '@app/deployment/cluster/cluster.component';
import { ScheduleComponent } from '@app/deployment/schedule/schedule.component';
import { ClientsComponent } from '@app/deployment/clients/clients.component';
import { PackageComponent } from '@app/deployment/package/package.component';
import { ManagerComponent } from '@app/deployment/manager/manager.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

const dialogData =     {cluster: {id: null, name: "", ip: "", port: "", xapFile: true}, type: ""} ; 

describe('ClusterDialogComponent', () => {
  let component: ClusterDialogComponent;
  let fixture: ComponentFixture<ClusterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterDialogComponent ,DeploymentComponent,ClusterComponent,ScheduleComponent,ManagerComponent,ClientsComponent,PackageComponent],
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        ScrollingModule,
        ReactiveFormsModule,
        MaterialModule,
        MatDialogModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        DeploymentRoutingModule,
        SweetAlert2Module.forRoot({
      }) ],
      providers: [{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: dialogData}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
