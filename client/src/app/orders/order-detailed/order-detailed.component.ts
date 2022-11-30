import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;

  constructor(private route: ActivatedRoute,
    private breadcrumService: BreadcrumbService,    
    private ordersService: OrdersService
  ) { 
    this.breadcrumService.set('@OrderDetailed', '');
  }

  ngOnInit(): void {
    console.log("start OrderDetailedComponent()");
    this.ordersService.getOrderDetailed(+this.route.snapshot.paramMap.get('id'))
      .subscribe((order: IOrder) => {
        console.log("found OrderDetailedComponent()");
        console.log("found order.id" + order.id);
        console.log("found order.status" + order.status);
        this.order = order;
        this.breadcrumService.set('@OrderDetailed', `Order# ${order.id} - ${order.status}`);
      }, error => {
        console.log(error);
      });
      console.log("end OrderDetailedComponent()");
  }

}
