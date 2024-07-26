import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredient: ingredient[] =[
    new ingredient('Apples', 5),
    new ingredient('Tpmatoes', 10)
  ];

  constructor() {}

  ngOnInit() { 
  }


}
