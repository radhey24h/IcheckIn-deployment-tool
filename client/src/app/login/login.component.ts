import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/authentication/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { CredentialService } from '@app/core/authentication/credential.service';
import { User } from '@app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;
  loginModel = new User('', '');
  submitted = false;
  isLoading = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    private translateService: TranslateService,
    private credentialService: CredentialService
  ) {
  }

  useLanguage(language: string) {
    this.translateService.use(language);
  }

  ngOnInit() { }

  // Action for when user sign in
  onSubmit() {
    this.submitted = true;
    this.isLoading = true;
    this.authService.login(this.loginModel).subscribe((userData) => {
      if (userData['token'] != null) {
        this.isLoading = false;

        this.credentialService.setCredentials(this.loginModel.userName, userData['token']);
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/deployment';
        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    });
  }

  // reset() {
  //   this.loginModel = new User('', '');
  // }
}


