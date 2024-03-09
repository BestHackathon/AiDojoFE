import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss'
})
export class FlashcardComponent {
  @Input() question: string = 'Ovo je jedno veliko pitanje?';
  @Input() answer: string = 'Ovo je jedan jos veci odgovor';
  isFlipped = false;

  flip() {
    this.isFlipped = !this.isFlipped;
  }
}


