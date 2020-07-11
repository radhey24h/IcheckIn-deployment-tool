import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from '@app/shared/loader/loader.component';
import { MaterialModule } from '@app/material.module';
import { AuthService } from '@app/core/authentication/auth.service';
import { CredentialService } from '@app/core/authentication/credential.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent,LoaderComponent],
      imports: [FormsModule,
        TranslateModule.forRoot(), 
        MaterialModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ AuthService, CredentialService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
