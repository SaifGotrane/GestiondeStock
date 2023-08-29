import {Component, OnInit} from '@angular/core';
import {error} from "ng-packagr/lib/utils/log";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-insription',
  templateUrl: './page-insription.component.html',
  styleUrls: ['./page-insription.component.scss']
})
export class PageInsriptionComponent implements OnInit{

 // utilisateurDto: UtilisateurDTO ={};
  // adresse: AdresseDTO = {};
  errorsMsg: Array<string> = [];

  constructor(
 //   private utilisateurService: UtilisateurService,
    private userService: UserService,
    private router : Router
  ) {
  }

  ngOnInit() {
  }

  // inscrire() : void {
  //   this.utilisateurDTO.adresse = this.adresse;
  //   this.utilisateurService.sinscire(this.utilisateurDTO)
  //     .subscribe(utilisateurDTO =>{
  //      this.connectUser();
  //     },
  //       error=> {
  //         this.errorsMsg = error.errors;
  //   });


  connectUser(){
    //      const authenticationRequest : AuthenticationRequest ={
    //        login: this.utilisateurDTO.email,
    //        password: 'this.utilisateurDTO.password'
    //}
    //      this.userService.login(autheticationRequest)
    //      .subscribe(response => {
    //         this.userService.setConnectedUser(response);
    //         this.getUserByEmail(authentication.login);
    //         localStorage.setItem('origin', 'inscription');
    //         this.router.navigate(['changermotdepasse']);
    //      });

   // getUserByEmail(email?:string): void{
      //     this.userService.getUserByEmail(email)
      //     .subscribe(user => {
      //      this.userService.setConnectedUser(user);
      //     });
   // }
  }
}
