import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe-service.service';
import { Response } from '@angular/http/src/static_response';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {

  constructor(
    private http: Http,
    private respServ: RecipeService
  ) { }

  // Overwrite data in DB
  storeRecipes() {
    return this.http.put('https://cookshop-a906d.firebaseio.com/recipes.json', this.respServ.getRecipes());
  }

  getRecipes() {
    this.http.get('https://cookshop-a906d.firebaseio.com/recipes.json')
    .map((response: Response) => {
      const recipes: Recipe[] = response.json();
      // Add ingredients to recipes
      for (let recipe of recipes) {
        if (!recipe['ingredients']) {
          // console.log('Add ingredient to' + recipe);
          recipe['ingredients'] = [];
        }
      }
      return recipes;
    })
    .subscribe((recipes: Recipe[]) => {
      this.respServ.setRecipes(recipes);
    });
  }
}
