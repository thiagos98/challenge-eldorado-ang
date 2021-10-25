import { DeviceService } from "./../device.service";
import { Component, OnInit } from "@angular/core";
import { Device } from "../device.model";
import { CategoryService } from "../../category/category.service";

@Component({
  selector: "app-device-read",
  templateUrl: "./device-read.component.html",
  styleUrls: ["./device-read.component.css"],
})
export class DeviceReadComponent implements OnInit {
  devices: Device[] = [];

  displayedColumns = ["id", "color", "part_number", "category_id", "actions"];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.read().subscribe((devices) => {
      this.devices = devices;
    });
  }
}
