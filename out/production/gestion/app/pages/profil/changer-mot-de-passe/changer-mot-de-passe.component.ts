import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit{

 // changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  ancienMoDePasse = '';
  constructor(
   // private utili: CategoriesService,
    private router:Router,
    private userService: UserService
  ) {
  }

  ngOnInit():void {
    // this.utili.findAll()
    //     .subscribe(res=> {
    //     });
    if(localStorage.getItem('origin') && localStorage.getItem('origin') == 'inscription') {
      this.ancienMoDePasse = 'this.utilisateurDTO.password';
      localStorage.removeItem('origin');
    }
  }

  cancel():void {
    this.router.navigate(['profil'])
  }

  // changerMotDePasseUtilisateur():void {
  //   this.changerMotDePasseDto.id = this.userService.getConnectedUser().id;
  //   this.userService.changerMotDePasse(this.changerMotDePasseDTO)
  //       .subscribe(data =>{
  //         this.router.navigate(['profil']);
  //       });
  // }
}
