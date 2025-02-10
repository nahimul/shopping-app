import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes('A Test Recipe 1', 'This is simply a test 1', 'https://www.publicdomainpictures.net/pictures/270000/velka/strawberry-fruit-picture.jpg'),
    new Recipes('A Test Recipe 2', 'This is simply a test 2', 'https://www.publicdomainpictures.net/pictures/270000/velka/strawberry-fruit-picture.jpg')
  ];
  constructor() { }
  ngOnInit() {
  }
}
