import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shrimp Dish',
      'This is simply a test',
      'https://shewearsmanyhats.com/wp-content/uploads/2015/10/garlic-shrimp-recipe-1b-480x270.jpg',
      [
        new Ingredient('Apple', 2),
        new Ingredient('Shrimp', 12),
        new Ingredient('Flour', 1),
      ],
    ),
    new Recipe(
      'A Tasty Recipe',
      'This is a more tasty recipe!',
      'https://www.bbcgoodfood.com/sites/default/files/categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('Banana', 2),
        new Ingredient('Sushi', 1),
        new Ingredient('Flour', 1),
      ],
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // This provides little protection...
    // We still modify the objects by reference, but I suppose we protect the array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
