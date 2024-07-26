import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', '/src/assets/img.jpg')
  ];

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
