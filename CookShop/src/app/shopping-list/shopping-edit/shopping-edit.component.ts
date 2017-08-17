import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping-service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  OnAddIng() {
    const ignName = this.nameInputRef.nativeElement.value;
    const ignAmount = this.amountInputRef.nativeElement.value;
    const newIng = new Ingredient(ignName, ignAmount);
    this.shoppingService.addIngredients(newIng);
  }

  OnDeleteIng() {

  }

  OnClearIng() {

  }

}
