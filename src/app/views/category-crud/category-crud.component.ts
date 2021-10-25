import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.css']
})
export class CategoryCrudComponent implements OnInit {

  constructor(private router:Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Category',
      icon: 'support',
      routerUrl: '/categories'
    }
  }

  ngOnInit(): void {
  }

  navigateToCategoryCreate():void {
    this.router.navigate(['/categories/create']);
  }

}
