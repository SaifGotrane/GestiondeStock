import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {DepotService} from "../../services/depot/depot.service";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent implements OnInit {

  //  @Input()
  // utilisateurDto : UtilisateurDto ={};
  @Output()
  suppresionResult = new EventEmitter();
  selectedIdUserToDelete ? = -1;

  constructor(
      private router: Router,
      private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  // modifierUser() : void{
  //   this.router.navigate(['nouvelutilisateur', this.utilisateurDto.id]);
  // }

  confirmerEtSupprimerUser(): void {
    // if(this.utilisateurDto.id) {
    //   this.depotService.deleteDepot(this.utilisateurDto.id)
    //       .subscribe( res => {
    //         this.suppresionResult.emit('success');
    //       }, error => {
    //         this.suppresionResult.emit(error.error.error);
    //       });
    // }
  }
}
