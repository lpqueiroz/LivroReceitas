import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) { 
    console.log('constructor de recipe-list foi chamado');
  }

  ngOnInit(): void {
    console.log('ngOnInit de recipe-list foi chamado');
    this.recipes = this.recipeService.getRecipes();
  }

  destruirCompRecipeItem() {
    this.recipes.splice(0, 2);
  }

}
