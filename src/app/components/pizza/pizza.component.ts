import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  public pizzas : any = [];
  public grandTotal1 !: number;
  public pizzaPrice !: number;

  constructor(public cart:CartService) { }
  quantity =1;

  ngOnInit(): void {
    this.cart.getPizzas()
    .subscribe(res=>{
      this.pizzas = res;
      this.grandTotal1 = this.cart.getTotalPrice1();
      this.pizzaPrice = this.grandTotal1+200;
    })
  }

  public get timestamp(): string {
    return Date.now().toString()
  }

}
