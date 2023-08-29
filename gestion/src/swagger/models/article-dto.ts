/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface ArticleDto {
  category?: CategoryDto;
  codeArticle?: string;
  designation?: string;
  id?: number;
  photo?: string;
  prixUnitaireHT?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
