
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { DeviceCrudComponent } from "./views/device-crud/device-crud.component";
import { CategoryCrudComponent } from "./views/category-crud/category-crud.component";
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { DeviceCreateComponent } from './components/device/device-create/device-create.component';
import { DeviceDeleteComponent } from "./components/device/device-delete/device-delete.component";
import { CategoryDeleteComponent } from "./components/category/category-delete/category-delete.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "devices",
    component: DeviceCrudComponent,
  },
  {
    path: "categories",
    component: CategoryCrudComponent,
  },
  {
    path: "devices/create",
    component: DeviceCreateComponent,
  },
  {
    path: "categories/create",
    component: CategoryCreateComponent,
  },
  {
    path: "devices/delete/:id",
    component: DeviceDeleteComponent,
  },
  {
    path: "categories/delete/:id",
    component: CategoryDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
