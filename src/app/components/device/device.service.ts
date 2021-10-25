import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Device } from "./device.model";
import { Observable,EMPTY } from "rxjs";
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: "root",
})
export class DeviceService {
  baseUrl = `http://localhost:3001/device`;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(device: Device): Observable<Device> {
    return this.http.post<Device>(this.baseUrl, device).pipe(
      map((obj: Device) => obj),
      catchError((e: any) => this.errorHandler(e))
    );
  }

  read(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Device> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Device>(url).pipe(
      map((obj:Device) => obj),
      catchError((e:any) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Device> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Device>(url).pipe(
      map((obj:Device) => obj),
      catchError((e:any) => this.errorHandler(e))
    );
  }

  errorHandler(e:any):Observable<any> {
    this.showMessage("Ocorreu um erro", true);
    return EMPTY;
  }
}
