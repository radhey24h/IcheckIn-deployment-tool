import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatButtonModule } from '@angular/material';
import { CoreModule } from '@app/core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    TranslateModule,
    SharedModule,
    MatButtonToggleModule,
    MatMenuModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MatCardModule
  ],
  providers: []
})
export class LoginModule { }
