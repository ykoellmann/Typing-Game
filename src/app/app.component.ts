import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LetterComponent} from "./letter/letter.component";
import {Letter} from "./letter/letter";
import {faker} from '@faker-js/faker'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LetterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('textInput') textInput!: ElementRef;

  randomTextArray: Letter[] = [];
  showSuccess: boolean = false;

  constructor() {
    this.fillRandomTextArray();
  }

  fillRandomTextArray() {
    const letters = faker.lorem.sentence().split('')
    this.randomTextArray = [];
    for (const letter of letters) {
      this.randomTextArray.push(new Letter(letter, null))
    }
  }

  inputText(e: any): void {
    const input = e.target.value.split('');
    for (let i = 0; i < this.randomTextArray.length; i++) {
      if (input[i] === this.randomTextArray[i].letter) {
        this.randomTextArray[i].isRight = true;
      } else if (input[i] !== undefined) {
        this.randomTextArray[i].isRight = false;
      } else {
        this.randomTextArray[i].isRight = undefined;
      }
    }

    if (this.randomTextArray.find(x => x.isRight === false || x.isRight === undefined) === undefined) {
      this.showSuccess = true;
      return;
    }

    this.showSuccess = false;
  }

  regenerateSentence(): void {
    this.fillRandomTextArray();
    this.textInput.nativeElement.value = '';
  }
}
