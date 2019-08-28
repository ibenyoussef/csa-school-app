import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserFacadeService } from '../services/user-facade.service';
@Component({
  selector: 'csa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userFacade: UserFacadeService) { }

  ngOnInit() {

   this.user$ =  this.userFacade.user$;
   this.user$.subscribe(d=> console.log(d))

  }
  login(){
    this.userFacade.login();
  }
  logout(){
    this.userFacade.logout();

  }

}
