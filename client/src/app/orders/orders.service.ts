import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOrdersForUser() {
    console.log("getOrdersForUser()");
    return this.http.get(this.baseUrl + "orders")
  }

  getOrderDetailed(id: number) {
    console.log("getOrderDetailed() id=" + id);
    return this.http.get(this.baseUrl + "orders/" + id)
  }  

}
