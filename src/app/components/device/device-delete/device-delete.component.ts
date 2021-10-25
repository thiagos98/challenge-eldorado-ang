import { DeviceService } from "./../device.service";
import { Component, OnInit } from "@angular/core";
import { Device } from "../device.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-device-delete",
  templateUrl: "./device-delete.component.html",
  styleUrls: ["./device-delete.component.css"],
})
export class DeviceDeleteComponent implements OnInit {
  device: Device = {
    color: "",
    part_number: Number(),
    category_id: Number(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  constructor(
    private deviceService: DeviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.deviceService.readById(`${id}`).subscribe((device) => {
      this.device = device;
    });
  }

  deleteDevice(): void {
    this.deviceService.delete(`${this.device.id}`).subscribe((device) => {
      this.deviceService.showMessage("Dispositivo excluído com Sucesso");
      this.router.navigate(["/devices"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/devices"]);
  }
}
