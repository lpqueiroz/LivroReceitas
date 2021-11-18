import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('ngOnDestroy DE RECIPES foi executado!!!');
  }

}
