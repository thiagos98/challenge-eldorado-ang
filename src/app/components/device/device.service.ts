import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Device } from "./device.model";

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
    return this.http.post<Device>(this.baseUrl, device);
  }

  read(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl);
  }

  readById(id: string): Observable<Device> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Device>(url);
  }

  delete(id: string): Observable<Device> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Device>(url);
  }
}
