import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', '/src/assets/img.jpg')
  ];
  constructor(){

  }

  ngOnInit(): void {
    
  }
}
// https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpeg'