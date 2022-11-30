import { Component, OnInit } from '@angular/core';
import { IOrder } from '../shared/models/order';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: IOrder[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    console.log("constructor Orders()")
    this.getOrders();
  }

  getOrders() {
    console.log("start getOrders()")
    this.ordersService.getOrdersForUser().subscribe((orders: IOrder[]) => {
      console.log("found orders")
      this.orders = orders;
      console.log("orders.length=" + orders.length)
    }, error => {
      console.log(error);
    });
    console.log("end getOrders()")
  }
}
