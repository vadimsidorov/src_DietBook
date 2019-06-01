import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../shared/server.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  isError = false;
  subcription: Subscription;
  constructor(private serverService: ServerService) {
   }
  ngOnInit() {
    // Chek if any error occured while we tried to login, such as incorrect password or email
    this.subcription = this.serverService.loginErr.subscribe((err) => {
      this.isError = err;
    })
  }
  onSignIn(form: NgForm) {
    if (form.invalid) {
      return;
    }
      this.serverService.login(form.value.email, form.value.password);
  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
