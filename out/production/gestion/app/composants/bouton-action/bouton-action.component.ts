import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-bouton-action',
  templateUrl: './bouton-action.component.html',
  styleUrls: ['./bouton-action.component.scss']
})
export class BoutonActionComponent implements OnInit{
  @Output()
  clickEvent = new EventEmitter
  constructor() {
  }

  ngOnInit() {
  }

  buttonNouveauClick():void{
    this.clickEvent.emit();
  }

}
