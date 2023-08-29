import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.scss']
})
export class PageUtilisateurComponent implements OnInit{

  //  listUser: Array<UtilisateurDto> =[];
  errorMsg = '';

  constructor(
    private router:Router,
    //   private utilisateurService: UtilisateurService
  ) {
  }

  ngOnInit() {
  }

  findListUser():void {
    // this.utilisateurService.findAllUser()
    //     .subscribe( user = > {
    //       this.listUser = user;
    //});
  }

  nouvelUtilisateur() :void {
    this.router.navigate(['nouvelutilisateur'])
  }

  // handleSuppression(event: any):void {
  //   if(event === 'success') {
  //     this.findListUser();
  //   } else {
  //     this.errorMsg = event;
  //   }
  // }
}
