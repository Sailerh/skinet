import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss']
})
export class CheckoutSuccessComponent implements OnInit {
  order: IOrder;

  constructor(private router: Router) { 
    console.log("start CheckoutSuccessComponent()")
    const navigation = this.router.getCurrentNavigation();
    const state = navigation && navigation.extras && navigation.extras.state;
    if (state)
    {
      console.log("state is SET")
      this.order = state as IOrder;
    }
    console.log("end CheckoutSuccessComponent()")
  }

  ngOnInit(): void {
  }

}
