import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutRoutingModule } from 'src/app/checkout/checkout-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckoutRoutingModule,    
    SharedModule
  ]
})
export class OrderDetailedModule { }
