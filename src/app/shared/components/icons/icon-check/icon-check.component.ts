import { Component } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";

@Component({
  selector: 'app-icon-check',
  templateUrl: './icon-check.component.html',
  styleUrls: ['./icon-check.component.css']
})
export class IconCheckComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faCheck;
  }
}
