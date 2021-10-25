import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-device-crud",
  templateUrl: "./device-crud.component.html",
  styleUrls: ["./device-crud.component.css"],
})
export class DeviceCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Device',
      icon: 'redeem',
      routerUrl: '/devices'
    }
  }

  ngOnInit(): void {}

  navigateToDeviceCreate(): void {
    this.router.navigate(["/devices/create"]);
  }
}
