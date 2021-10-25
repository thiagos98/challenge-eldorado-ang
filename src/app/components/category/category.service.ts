import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { Category } from "./category.model";

import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  baseUrl = "http://localhost:3001/category";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category).pipe(
      map((obj:Category) => obj),
      catchError((e:any) => this.errorHandler(e))
    );
  }

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
      map((obj:Category) => obj),
      catchError((e:any) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Category>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
