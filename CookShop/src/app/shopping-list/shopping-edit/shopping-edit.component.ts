import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingAdd = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  OnAddIng() {
    const ignName = this.nameInputRef.nativeElement.value;
    const ignAmount = this.amountInputRef.nativeElement.value;
    const newIng = new Ingredient(ignName, ignAmount);
    this.ingAdd.emit(newIng);
  }

  OnDeleteIng() {

  }

  OnClearIng() {

  }

}
