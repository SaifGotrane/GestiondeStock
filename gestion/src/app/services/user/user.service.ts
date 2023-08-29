import { Injectable } from '@angular/core';
import {error} from "ng-packagr/lib/utils/log";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {ChangerMotDePasseComponent} from "../../pages/profil/changer-mot-de-passe/changer-mot-de-passe.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
  //  private utilisateurService: UilisateurService,
  //  private authenticationService: AuthenticationService,
      private router: Router
  ) { }

  // login(authenticationRequest: AuthenticationRequest):Observable<AuthenticationResponse> {
  //   return this.authenticationService.authenticate(authenticationRequest);
  //}
  //}

  // getUserByEmail(email?: string): Observable<UtilisateurDTO>{
  //      if(email !== undefined){
  //   return this.utilisateurService.findByEmail(email);
  //    }
    //  return of();
  // }


  // setConnectedUser(autheticationResponse: AutheticationResponse):void{
  //   localStorage.setItem('utilisateur', JSON.stringify(utilisateur));
  // }

  // getConnectedUser():UtilisateurDTO{
  //   if(localStorage.getItem('connectedUser')) {
  //     return JSON.parse(localStorage.getItem('connectedUser') as string);
  //   }
  //   return {};
  // }

 // changerMotDePasse(changerMotDePasseDTO:ChangerMotDePasseUtilisateurDTO) : Observable<ChangerMotDePasseUtilisateurDTO>{
  //  return this.utilsateurService.changerMotDePasse(changerMotDePasseDTO);
  //}

  // setUtilisateur(utilisateur: UtilisateurDTO){
  //  localStorage.setItem('connectedUser', JSON.stringify(autheticationResponse));
  //}

  isUserLoggedAndAccessTokenValid():boolean{
    if(localStorage.getItem('acessToken')) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  // sinscrire(utilisateur : UtilisateurDTO):Observable<UtilisateurDTO>{
  //   return this.utilisateurService.save(utilisateur);
  // }

  // enregistrerUser(userDto: UtilisateurDto):Observable<UtilisateurDto>{
  // return this.utilisateurService.save(depotDto);
  //}

  //findAllUsers(): Observable<UtilisateurDto[]> {
  // return this.utilisateurService.findAll();
  //}

  //findUserById(idUser?: number): Observable<UtilisateurDto> {
  //if(idUser){
  //return this.utilisateurService.findById(idUser);
  //}
  //return of();
  //  }

  //    deleteUser(idUser: number): Observable<any> {
  //      if(idUser) {
  //    //    this.utilisateurService.delete(idUser);
  //      }
  //      return of();
  //    }
}
