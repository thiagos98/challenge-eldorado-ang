import { DeviceService } from "./../device.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Device } from "../device.model";

@Component({
  selector: "app-device-create",
  templateUrl: "./device-create.component.html",
  styleUrls: ["./device-create.component.css"],
})
export class DeviceCreateComponent implements OnInit {
  device: Device = {
    color: "",
    part_number: Number(),
    category_id: Number(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  constructor(private deviceService: DeviceService, private router: Router) {}

  ngOnInit(): void {}

  createDevice(): void {
    this.deviceService.create(this.device).subscribe(() => {
      this.deviceService.showMessage("Dispositivo Criado com Sucesso!");
      this.router.navigate(["/devices"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/devices"]);
  }
}
