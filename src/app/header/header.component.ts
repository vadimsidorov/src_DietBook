import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { ServerService } from '../shared/server.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private serverService: ServerService) { }
  public userIsAuth = false;
  private authLisnterSub: Subscription;
  ngOnInit() {
    this.authLisnterSub = this.serverService.getAuthStatusListner().subscribe((result) => {
      this.userIsAuth = result;
    });
  }
  sign () {
    this.router.navigate(['/signIn']);
  }
  signOut () {
    this.serverService.signOut()
  }
  ngOnDestroy() {
    this.authLisnterSub.unsubscribe()
  }
}
