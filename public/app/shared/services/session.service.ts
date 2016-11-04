import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {

  private isLoggedIn: boolean = false;

  constructor(private http: Http) { }

  login(emailAddress: string, password: string): Promise<any> {
    return this.http.post('/session/login/', {
      emailAddress: emailAddress,
      password: password
    }).toPromise()
      .then(res => {
        this.isLoggedIn = true;
        return res.json();
      })
      .catch(this.handleError);
  }

  getStatus(): boolean {
    return this.isLoggedIn;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.json().message);
  }
}
