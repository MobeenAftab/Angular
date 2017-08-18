import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-service.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Meat 2', 4),
        new Ingredient('Fries', 20),
    ]),
    new Recipe('A Test Recipe 2',
    'This is simply a test2',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Bun', 1),
      new Ingredient('Bread 2', 4),
      new Ingredient('Fries', 20),
  ])
  ];

  // Get a copy of recipes, not a reference to the array.
  getRecipes() {
    return this.recipes.slice();
  }

  // Post recipe ingredients to shopping list
  postIngredientsToShopping(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  constructor(private shoppingService: ShoppingService) {
  }
}
