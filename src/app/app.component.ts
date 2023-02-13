import { Component } from '@angular/core';
import { QUOTES } from './modal/database';
import { Quotation } from './modal/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Best Quotes';
  quotes: Quotation[] = QUOTES;
  value = 0;

  addVote(quotation: Quotation, value: number){
    quotation.votes += value;
  }

  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0);
  }

  onNewQuotation(quotation : Quotation){
    this.quotes.unshift(quotation)
  }
}
