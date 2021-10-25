import { DeviceService } from './../device.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {

  constructor(private deviceService: DeviceService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createDevice():void {
    this.deviceService.showMessage("Dispositivo Criado com Sucesso!");
  }

  cancel():void {
    this.router.navigate(['/devices']);
  }

}
