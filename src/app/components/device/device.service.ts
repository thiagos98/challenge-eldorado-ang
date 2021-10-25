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

  showMessage(msg: string): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(device: Device): Observable<Device> {
    return this.http.post<Device>(this.baseUrl, device);
  }

  read(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl);
  }
}
