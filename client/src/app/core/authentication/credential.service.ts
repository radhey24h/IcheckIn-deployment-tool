import { Injectable } from '@angular/core';

const credentialsKey = 'token';
const userNameKey = 'userName';
const checkAuthenticationKey = 'isAuthenticated' ;

@Injectable({
  providedIn: 'root',
})
export class CredentialService {

    isLoggedIn:boolean = false;

    constructor() {
        
        }

      /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return (this.getToken() != null)? true: false;
  }
  
   getToken():string {
    const authKey = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    return authKey;
  }

setCredentials(username,credentials) {
    this.isLoggedIn = true;
    sessionStorage.setItem(checkAuthenticationKey,'true');
    sessionStorage.setItem(userNameKey,username);
    sessionStorage.setItem(credentialsKey,credentials);
}

removeCredentials() {
    this.isLoggedIn = false;
    sessionStorage.removeItem(checkAuthenticationKey);
    sessionStorage.removeItem(userNameKey);
    sessionStorage.removeItem(credentialsKey);
}

}

