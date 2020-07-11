import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterComponent } from './cluster.component';
import { MaterialModule } from '@app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClusterComponent', () => {
  let component: ClusterComponent;
  let fixture: ComponentFixture<ClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterComponent ],
      imports: [ MaterialModule,BrowserAnimationsModule,HttpClientModule,FormsModule,ReactiveFormsModule, SweetAlert2Module.forRoot({
        // buttonsStyling: false,
        // customClass: 'modal-content',
        // confirmButtonClass: 'btn btn-primary',
        // cancelButtonClass: 'btn'
    }) ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
