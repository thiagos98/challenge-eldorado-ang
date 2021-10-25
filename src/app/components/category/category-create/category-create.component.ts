import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  constructor(private router:Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  createCategory():void {
    this.categoryService.showMessage('Categoria Criada com Sucesso!')
  }

  cancel():void {
    this.router.navigate(['/categories']);
  }

}
