import{EventEmitter,Injectable} from '@angular/core'
import{Recipe } from './recipe.model'
import{Ingredient} from '../shared/ingredient.model'
import{ShopingListService} from '../shoping-list/shoping-list.service';

@Injectable()
export class RecipeService{

  constructor(private  shopingListService: ShopingListService){}

    receipeSelected = new EventEmitter<Recipe>();
   
   private recipes: Recipe[] =[
    new Recipe('a test recipe',
     'testing',
     'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg',
     [
       new Ingredient('onion',5),
       new Ingredient('french fries',2),
       new Ingredient('pineapple',10)
     ]),
    
    
    new Recipe('a Different recipe',
     'second recipe',
     'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg',
     [
       new Ingredient('meat',5),
       new Ingredient('french fries',2),
       new Ingredient('pineapple',10)
     ])
  ];

  getRecipes(){
    return   this.recipes.slice();
  }
 
 addIngredientsToShopingList(ingredients:Ingredient[] ){
  this.shopingListService.addIngredients(ingredients);

 }
 getRecipe(id:number){
    return this.recipes[id];

 }


}