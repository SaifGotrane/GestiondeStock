import { Component,OnInit} from '@angular/core';
import {Menu} from "./menu";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  public menuProperties: Array<Menu> =[
    {
    id :'1',
    titre:'Tableau de bord',
    icon:'fa-solid fa-chart-line',
    url:'',
    sousMenu: [
      {
        id:'11',
        titre:'Vue d\'ensemble',
        icon:'fa-solid fa-chart-pie',
        url:''
      },
      {
        id:'12',
        titre:'Statistiques',
        icon:'fa-solid fa-chart-column',
        url:'statistiques'
      }
    ]
  },
    {
      id:'2',
      titre:'Articles',
      icon:'fa-solid fa-boxes-stacked',
      url:'',
      sousMenu:[
        {
          id:'21',
          titre:'Articles',
          icon:'fa-solid fa-boxes-stacked',
          url:'articles'
        },
        {
          id:'22',
          titre:'Mouvements du stock',
          icon:'fa-solid fa-dolly',
          url:'mvtstk'
        },

      ]
    },
    {
      id:'3',
      titre:'Dépôt',
      icon:'fa-solid fa-warehouse',
      url:'',
      sousMenu:[
        {
          id:'31',
          titre:'Dépôt',
          icon:'fa-solid fa-warehouse',
          url:'depot'
        },
      ]
    },
    {
      id:'4',
      titre:'Parametrages',
      icon:'fa-solid fa-gear',
      url:'',
      sousMenu:[
        {
          id:'41',
          titre:'Categories',
          icon:'fa-solid fa-gear',
          url:'categories'
        },
        {
          id:'42',
          titre:'Utilisateurs',
          icon:'fa-solid fa-user-gear',
          url:'utilisateurs'
        }
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router:Router
  ) { }
ngOnInit() {
}

    navigate(menu:Menu): void {
      if(this.lastSelectedMenu) {
        this.lastSelectedMenu.active=false;
      }
      menu.active=true;
      this.router.navigate([menu.url]);
      this.lastSelectedMenu=menu;
    }
}
