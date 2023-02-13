import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quotation } from '../modal/quotation';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css'],
})
export class QuotationListComponent {
  @Input() quotes: Quotation[] | undefined;
  @Output() vote = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number) {
    this.vote.emit({value,quotation});
  }
}

export interface QuotationEvent {
  quotation: Quotation;
  value: number;
}
