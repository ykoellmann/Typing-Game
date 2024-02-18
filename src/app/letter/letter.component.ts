import {Component, Input} from '@angular/core';
import {Letter} from "./letter";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {
  @Input() letter: Letter = new Letter('', null);
}
