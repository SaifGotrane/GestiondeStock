import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(
      private userService: UserService,
      //   private depotService:DepotsService
  ) { }

  // enregistrerDepot(depotDto: DepotDto):Observable<DepotDto>{
  // return this.depotService.save(depotDto);
  //}

  //findAllDepots(): Observable<DepotDto[]> {
  // return this.depotService.findAll();
  //}

  //findDepotById(idDepot?: number): Observable<DepotDto> {
  //if(idDepot){
  //return this.depotService.findById(idDepot);
  //}
  //return of();
  //  }

//    deleteDepot(idDepot: number): Observable<any> {
  //      if(idDepot) {
  //    //    this.depotService.delete(idDepot);
  //      }
  //      return of();
  //    }

}
