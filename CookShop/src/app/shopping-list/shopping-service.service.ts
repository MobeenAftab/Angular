import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingService {

  // Detect new ingredients
  ingChanged = new EventEmitter<Ingredient[]>();
  // Detect if an ingredient is being changed
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // Return new copy of array
    this.ingChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    // ES6 spread (...) feature which turns array of elements into a list of elements
    this.ingredients.push(...ingredients);
    // Updated copy of array
    this.ingChanged.emit(this.ingredients.slice());
  }

  // Get ing index id
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIng(index: number, newIng: Ingredient) {
    this.ingredients[index] = newIng;
    this.ingChanged.next(this.ingredients.slice());
  }

  deleteIng(index: number) {
    this.ingredients.splice(index, 1);
    this.ingChanged.next(this.ingredients.slice());
  }

}
