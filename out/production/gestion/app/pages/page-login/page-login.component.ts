import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {error} from "ng-packagr/lib/utils/log";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit{

  authenticationRequest = {};
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router : Router
  ) {
  }

  ngOnInit() {
  }

  login(){
  //  this.userService.login(this.authenticationRequest)
    //   .subscribe(data => {
    //     this.userService.setAccessToken(data);
   //      this.getUserByEmail();
    //     this.router.navigate(['']);
    //   }, error =>{
    //     console.log(error);
     //  this.errorMessage = 'Adresse et / ou Mot de passe incorrecte';
    //   })
  }

  getUserByEmail(): void{
    //     this.userService.getUserByEmail(this.authentication.login)
    //     .subscribe(user => {
    //      this.userService.setConnectedUser(user);
    //     });
  }
}
