import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../shared/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errorMessage: string;
  isEmailTaken = false;
  isUsernameTaken = false;

  constructor(private serverService: ServerService, private router: Router) { }
  @ViewChild('email', {read: ElementRef}) emailRef: ElementRef;
  @ViewChild('username', {read: ElementRef}) usernameRef: ElementRef;

  onKeyEmail() {
    if (this.isEmailTaken) {
      this.isEmailTaken = false;
    }
  }
  onKeyUsername() {
    console.log('u type something in username input field')
    if (this.isUsernameTaken) {
      this.isUsernameTaken = false;
    }
  }
  ngOnInit() {
  }
  onSignup (form: NgForm) {
    if (form.invalid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    const username = form.value.username;
    this.serverService.test(email, password, username).subscribe(
      (response) => {
        console.log(response);
        this.errorMessage = '';
        this.isEmailTaken = false;
        this.isUsernameTaken = false;
        this.router.navigate(['/signIn']);
      },
      (error) => {
        if (error.error.indexOf('email') === 60) {
          console.log('email taken');
          this.emailRef.nativeElement.focus();
          this.isEmailTaken = true;
          return this.errorMessage = 'email is already taken';
        }
        if (error.error.indexOf('username') !== -1) {
          console.log('username taken');
          this.usernameRef.nativeElement.focus();
          this.isUsernameTaken = true;
          return this.errorMessage = 'username is already taken';
        }

      }
    );
  }
}
