import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(/*private recipeService: RecipeService*/) { }

  ngOnInit() {
    // Event listiner for any changes detected
    // this.recipeService.recipeSelected.subscribe(
    //   // Get recipe that was slected from event
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

}
