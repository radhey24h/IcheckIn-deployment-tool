import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { DeploymentModule } from './deployment/deployment.module';
import { LoginModule } from './login/login.module';
import {TranslateModule, TranslatePipe, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { CoreModule } from './core/core.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    // Module for Translations
    TranslateModule.forRoot(
      {
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
      }),
      SweetAlert2Module.forRoot({
        // buttonsStyling: false,
        // customClass: 'modal-content',
        // confirmButtonClass: 'btn btn-primary',
        // cancelButtonClass: 'btn'
    }),
    LayoutModule,
    LoginModule,
    DeploymentModule,
    AppRoutingModule,
FlexLayoutModule
  ],
  bootstrap: [AppComponent],
  exports: [TranslatePipe]
})
export class AppModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

