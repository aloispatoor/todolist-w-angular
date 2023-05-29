import { Component } from '@angular/core';
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon-delete.component.html',
  styleUrls: ['./icon-delete.component.css']
})
export class IconDeleteComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faTrash;
  }
}
