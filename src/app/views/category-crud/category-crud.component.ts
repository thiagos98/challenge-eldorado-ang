import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.css']
})
export class CategoryCrudComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }

  navigateToCategoryCreate():void {
    console.log("navegando ate categoria");

    this.router.navigate(['/categories/create']);
    
  }

}
