import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./components/customer/customer.component";
import {ItemComponent} from "./components/item/item.component";
import {OrderComponent} from "./components/order/order.component";
import {PlaceOrderComponent} from "./components/place-order/place-order.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

const routes: Routes = [
  {path:'customer', component:CustomerComponent},
  {path:'item', component:ItemComponent},
  {path:'order', component:OrderComponent},
  {path:'place-order', component:PlaceOrderComponent},
  {path:'**', component:NotFoundPageComponent} //wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
