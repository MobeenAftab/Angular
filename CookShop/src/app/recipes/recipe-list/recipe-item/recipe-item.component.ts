import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // OnSelect() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
