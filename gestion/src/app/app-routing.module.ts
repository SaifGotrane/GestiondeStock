import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInsriptionComponent} from "./pages/page-insription/page-insription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiqueComponent} from "./pages/page-statistique/page-statistique.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {MvtstkComponent} from "./pages/mvtstk/mvtstk/mvtstk.component";
import {PageCategoriesComponent} from "./pages/categories/page-categories/page-categories.component";
import {NouvelleCategoryComponent} from "./pages/categories/nouvelle-category/nouvelle-category.component";
import {PageUtilisateurComponent} from "./pages/utilisateur/page-utilisateur/page-utilisateur.component";
import {NouvelUtilisateurComponent} from "./pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component";
import {PageProfilComponent} from "./pages/profil/page-profil/page-profil.component";
import {ChangerMotDePasseComponent} from "./pages/profil/changer-mot-de-passe/changer-mot-de-passe.component";
import {PageDepotComponent} from "./pages/depot/page-depot/page-depot.component";
import {NouveauDepotComponent} from "./pages/depot/nouveau-depot/nouveau-depot.component";
import {ApplicationGuardService} from "./services/guard/application-guard.service";

const routes: Routes = [
  {
    path:'login',
    component:PageLoginComponent
  },
  {
    path:'inscrire',
    component:PageInsriptionComponent,

  },
  {
    path:'',
    component:PageDashboardComponent,
    canActivate:[ApplicationGuardService],
    children:[
      {
        path: 'statistiques',
        component:PageStatistiqueComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'articles',
        component:PageArticleComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvelarticle',
        component:NouvelArticleComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvelarticle/:idArticle',
        component:NouvelArticleComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'mvtstk',
        component:MvtstkComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'categories',
        component:PageCategoriesComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvellecategorie',
        component:NouvelleCategoryComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvellecategorie/:idCategory',
        component:NouvelleCategoryComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'utilisateurs',
        component:PageUtilisateurComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvelutilisateur',
        component:NouvelUtilisateurComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'profil',
        component:PageProfilComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'changermotdepasse',
        component:ChangerMotDePasseComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'depot',
        component:PageDepotComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouveaudepot',
        component:NouveauDepotComponent,
        canActivate:[ApplicationGuardService]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
