import { Component, importProvidersFrom, Input} from '@angular/core';
import { Quotation } from '../modal/quotation';
import { QUOTES } from '../modal/database';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  @Input()
  quotes: Quotation[] | undefined;
  @Input()
  title: string | undefined;
}
