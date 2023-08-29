import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-depot',
  templateUrl: './page-depot.component.html',
  styleUrls: ['./page-depot.component.scss']
})
export class PageDepotComponent implements OnInit{

    //  listDepot: Array<DepotDto> =[];
    errorMsg = '';

    constructor(
        private router:Router,
        //   private depotService: DepotService
    ) {
    }

    ngOnInit():void {
    }

    findListDepot():void {
        // this.depotService.findAllDepot()
        //     .subscribe( depots = > {
        //       this.listDepot = depots;
        //});
    }

    nouveauDepot():void {
        this.router.navigate(['nouveaudepot'])
    }

    // handleSuppression(event: any):void {
    //   if(event === 'success') {
    //     this.findListDepot();
    //   } else {
    //     this.errorMsg = event;
    //   }
    // }
}
