import { Component, EventEmitter, Output } from '@angular/core';
import { Quotation } from '../modal/quotation';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>();
  showForm = false;
  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0
   };

  onSwitchForm(){
    this.showForm = !this.showForm;
  }

  addQuotation(){
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0}
  }

}
