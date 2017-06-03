import { ActionReducer, Action } from '@ngrx/store';

import * as IngredientsActions from 'app/shared/states/ingredients/ingredients.actions';
import { ingredientsState } from 'app/shared/states/ingredients/ingredients.initial-state';
import { IIngredientsTable } from 'app/shared/states/ingredients/ingredients.interface';

export function ingredientsReducer(ingredientsTbl = ingredientsState(), action: IngredientsActions.All): IIngredientsTable {
  switch (action.type) {
    case IngredientsActions.LOAD_INGREDIENTS_SUCCESS: {
      return {
        ...ingredientsTbl,
        ...action.payload
      };
    }

    default:
      return ingredientsTbl;
  }
}
