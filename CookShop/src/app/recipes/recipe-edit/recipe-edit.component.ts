import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { RecipeService } from '../recipe-service.service';
// import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  subcription: Subscription;

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subcription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // If no id returned, in new mode
        this.editMode = params['id'] != null;
        this.initFornm();
        console.log(this.editMode);
      }
    );
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
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
            'name' : new FormControl(ing.name, Validators.required),
            'amount' : new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }))
        }
      }
    }
    // Populate edit recipe form with selected recipe
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recipeImg, Validators.required),
      'description' : new FormControl(recipeDesc, Validators.required),
      'ingredients' : recipeIng
    })
  }

  onSubmit() {
    // console.log(this.recipeForm);
    // Get form values as new recipies
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );

    // Use this.recipeForm.value to get form values taking advantage of react
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addrecipe(this.recipeForm.value);
    }

    this.onCancel();
  }

  onAddIng() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount' : new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIng(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
