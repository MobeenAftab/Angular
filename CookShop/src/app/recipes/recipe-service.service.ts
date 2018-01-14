import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-service.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();
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

  // Replace existing recipes with recipe placeholder
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  // Get a copy of recipes, not a reference to the array.
  getRecipes() {
    return this.recipes.slice();
  }

  // Return recipe selected based on id
  getRecipe(index: number) {
    return this.recipes[index];
  }

  // Post recipe ingredients to shopping list
  postIngredientsToShopping(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  constructor(private shoppingService: ShoppingService) {
  }
  // Get updated list of recipes
  updateRecipeList() {
    this.recipeChanged.next(this.recipes.slice());
  }

  addrecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    // Get updated list of recipes
    this.updateRecipeList();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.updateRecipeList();  
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.updateRecipeList();
  }
}
