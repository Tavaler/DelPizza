import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  ProCart:Cart[]=[]

  public cartItemList : any=[]
  public pizzaList : any=[]
  public rmList = new BehaviorSubject<any>([]);
  public productList = new BehaviorSubject<any>([]);
  constructor() { }


addCart(data:any){
  this.ProCart.push(data)
  localStorage.setItem("cart",JSON.stringify(this.ProCart))
}

  getProducts(){
    return this.productList.asObservable();
  }

  getPizzas(){
    return this.rmList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  setPizza(pizza : any){
    this.pizzaList.push(...pizza);
    this.rmList.next(pizza);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  addPizzatoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  addtoCart1(pizza : any){
    this.pizzaList.push(pizza);
    this.rmList.next(this.pizzaList);
    this.getTotalPrice1();
    console.log(this.pizzaList)
  }

  getTotalPrice1() : number{
    let grandTotal1 = 0;
    this.pizzaList.map((a:any)=>{
      grandTotal1 += a.rmPrice;
    })
    return grandTotal1;
  }


  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.productPrice;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }


//  products = [];

// add(products:any){
//   this.products.push(products);
// }


}
