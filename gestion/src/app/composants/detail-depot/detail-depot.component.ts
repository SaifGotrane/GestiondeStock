import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {DepotService} from "../../services/depot/depot.service";

@Component({
  selector: 'app-detail-depot',
  templateUrl: './detail-depot.component.html',
  styleUrls: ['./detail-depot.component.scss']
})
export class DetailDepotComponent implements OnInit{

    //  @Input()
    // articleDto : ArticleDto ={};
    @Output()
    suppresionResult = new EventEmitter();
    selectedIdDepotToDelete ? = -1;

    constructor(
        private router: Router,
        private depotService: DepotService
    ) {
    }

    ngOnInit() {
    }


    // modifierDepot() : void{
    //   this.router.navigate(['nouveaudepot', this.depotDto.id]);
    // }

    confirmerEtSupprimerDepot(): void {
        // if(this.depotDto.id) {
        //   this.depotService.deleteDepot(this.depotDto.id)
        //       .subscribe( res => {
        //         this.suppresionResult.emit('success');
        //       }, error => {
        //         this.suppresionResult.emit(error.error.error);
        //       });
        // }
    }
}
