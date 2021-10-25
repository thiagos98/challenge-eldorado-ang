import { CategoryService } from "./../category.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Category } from "../category.model";

@Component({
  selector: "app-category-create",
  templateUrl: "./category-create.component.html",
  styleUrls: ["./category-create.component.css"],
})
export class CategoryCreateComponent implements OnInit {
  category: Category = {
    name: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {}

  createCategory(): void {
    this.categoryService.create(this.category).subscribe(() => {
      this.categoryService.showMessage("Categoria Criada com Sucesso!");
      this.router.navigate(["/categories"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/categories"]);
  }
}
