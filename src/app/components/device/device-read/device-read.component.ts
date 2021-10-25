import { DeviceService } from './../device.service';
import { Component, OnInit } from '@angular/core';
import { Device } from '../device.model';

@Component({
  selector: 'app-device-read',
  templateUrl: './device-read.component.html',
  styleUrls: ['./device-read.component.css']
})
export class DeviceReadComponent implements OnInit {
  devices: Device[] = [];

  constructor(private deviceService:DeviceService) { }

  ngOnInit(): void {
    this.deviceService.read().subscribe((devices) => {
      this.devices = devices;
      console.log(this.devices);
    });
  }

}
