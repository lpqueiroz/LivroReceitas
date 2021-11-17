import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Receita teste', 'Isso é apenas um teste', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_960,c_limit/0621-Sheet-Pan-Gnocchi.jpg'),
    new Recipe('Outra Receita teste', 'Isso é apenas um teste', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_960,c_limit/0621-Sheet-Pan-Gnocchi.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
