import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-depot',
  templateUrl: './nouveau-depot.component.html',
  styleUrls: ['./nouveau-depot.component.scss']
})
export class NouveauDepotComponent implements OnInit{

    constructor(
        private router:Router
    ) {
    }

    ngOnInit():void {
    }

    cancel():void {
        this.router.navigate(['depot'])
    }
}
