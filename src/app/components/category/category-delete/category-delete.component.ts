import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "../category.model";
import { CategoryService } from "../category.service";

@Component({
  selector: "app-category-delete",
  templateUrl: "./category-delete.component.html",
  styleUrls: ["./category-delete.component.css"],
})
export class CategoryDeleteComponent implements OnInit {
  category: Category = {
    name: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.categoryService.readById(`${id}`).subscribe((category) => {
      this.category = category;
    });
  }

  cancel(): void {
    this.router.navigate(["/categories"]);
  }

  deleteCategory(): void {
    this.categoryService.delete(`${this.category.id}`).subscribe(() => {
      this.categoryService.showMessage("Categoria Excluída com Sucesso!");
      this.router.navigate(["/categories"]);
    });
  }
}
