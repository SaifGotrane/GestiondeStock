/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { RolesDto } from './roles-dto';
export interface UtilisateurDto {
  adresse?: AdresseDto;
  datedeNaissance?: number;
  email?: string;
  id?: number;
  motDePasse?: string;
  nom?: string;
  photo?: string;
  prenom?: string;
  roles?: Array<RolesDto>;
}
