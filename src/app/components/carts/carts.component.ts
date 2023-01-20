import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

datacart :any;
total !: number;
  constructor(public cart:CartService,private http:HttpClient) {
    this.datacart = JSON.parse(localStorage.getItem("cart")!)
    console.log(this.datacart)
    this.feedtotal()
   }

  // quantity =1;
  ngOnInit(): void {
    // this.cart.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   this.grandTotal = this.cart.getTotalPrice();
    // })
  }

  feedtotal() {
    const form = new FormData();
    for (let i = 0; i < this.datacart.length; i++) {
      form.append("number", `${this.datacart[i].productAmount=1}`);
      form.append("price", `${this.datacart[i].productPrice}`);
    }
    this.http.post<any>(`https://localhost:44360/ApiCarts`, form).subscribe(data => {
      this.total = data
    })
  }

  // removeItem(item:any){
  //   this.cart.removeCartItem(item);
  // }
  // emptycart(){
  //   this.cart.removeAllCart();
  // }

}
