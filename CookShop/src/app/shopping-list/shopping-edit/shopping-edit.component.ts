import { Component, OnInit, ElementRef, ViewChild, EventEmitter, NgModule, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping-service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('name') nameInputRef: ElementRef;
  // @ViewChild('amount') amountInputRef: ElementRef;

  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingService: ShoppingService) { }

  // Get ing via index and subscribe for changes Add/Edit/Delete
  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    // const ignName = this.nameInputRef.nativeElement.value;
    // const ignAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIng(this.editItemIndex, newIng);
    } else {
      this.shoppingService.addIngredient(newIng);
    }
    this.editMode = false;
    form.reset();
  }


  onDelete() {
    this.shoppingService.deleteIng(this.editItemIndex);
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

}
