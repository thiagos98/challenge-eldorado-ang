import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Category } from "./category.model";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  baseUrl = "http://localhost:3001/category";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category);
  }

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }
}
