import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // If no id returned, in new mode
        this.editMode = params['id'] != null;
        this.initFornm();
        console.log(this.editMode);
      }
    );
  }

  private initFornm() {
    // Default values for recipe
    let recipeName = '';
    let recipeImg = '';
    let recipeDesc = '';
    let recipeIng = new FormArray([]);

    if (this.editMode) {
      // Assign selected recipe to edit form
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.imagePath;
      recipeDesc = recipe.description;
      // Check for recipe ing and push to formArray
      if (recipe.ingredients) {
        for (let ing of recipe.ingredients) {
          recipeIng.push(new FormGroup({
            'name' : new FormControl(ing.name),
            'amount' : new FormControl(ing.amount)
        }))
        }
      }
    }
    // Populate edit recipe form with selected recipe
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imgPath' : new FormControl(recipeImg),
      'description' : new FormControl(recipeDesc),
      'ingredients' : recipeIng
    })
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onAddIng() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(),
        'amount' : new FormControl()
      })
    );
  }

}
