import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() recipe!: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(
    private recipeService: RecipeService
  ) {
    console.log('construtor foi chamado');
  }

  ngOnInit(): void {
    console.log('ngOnInit chamado!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges chamado!');
    console.log(changes);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy foi chamado!');
  }

  onSelected() {
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
