import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

 // connectedUser: UtilisateurDTO ={};

  constructor(
      private userService: UserService
  ) {
  }

  ngOnInit() {
  //  this.connectedUser = this.userService.getConnectedUser();
  }

}
