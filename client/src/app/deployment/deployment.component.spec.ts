import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeploymentComponent } from './deployment.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';
import { DeploymentRoutingModule } from './deployment-routing.module';
import { ClusterComponent } from './cluster/cluster.component';
import { PackageComponent } from './package/package.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ManagerComponent } from './manager/manager.component';
import { ClientsComponent } from './clients/clients.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MaterialModule } from '@app/material.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('DeploymentComponent', () => {
  let component: DeploymentComponent;
  let fixture: ComponentFixture<DeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeploymentComponent,ClusterComponent, ScheduleComponent, PackageComponent, ManagerComponent, ClientsComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        TranslateModule.forRoot(),
        ScrollingModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterTestingModule,
        DeploymentRoutingModule,
        SweetAlert2Module.forRoot({
      }) ],
      
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
