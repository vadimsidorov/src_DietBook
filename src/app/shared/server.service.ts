import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class ServerService {
  constructor(private http: HttpClient, private router: Router) {}
  private token: string;
  public isAuthenticated: boolean;
  private authStatusListner = new Subject<boolean>();
  //let signIn component subcribe to error during login proccess
  public loginErr = new Subject<boolean>();

  getToken() {
    return this.token;
  }
  getAuthStatusListner() {
    return this.authStatusListner.asObservable()
  }
  test (email, password, username) {
    return this.http.post('http://localhost:3000/test', {email, password, username});
  }

  login(email, password) {
    this.http.post<{token: string}>('http://localhost:3000/login', {email, password})
      .subscribe((response) => {
        const token = response.token;
        this.token = token;
        if (token) {
          this.isAuthenticated = true;
          this.authStatusListner.next(true);
          this.router.navigate(['/']);
        }
      }, (err) => {
        this.loginErr.next(true)
      });
  }

  signOut () {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListner.next(false);
    this.router.navigate(['/']);
  }
}
