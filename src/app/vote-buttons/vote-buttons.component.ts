import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.css']
})
export class VoteButtonsComponent {
  @Output() voteValue = new EventEmitter<number>();
  value = 0;
}
