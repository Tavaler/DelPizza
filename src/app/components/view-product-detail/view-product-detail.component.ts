import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/Models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-view-product-detail',
  templateUrl: './view-product-detail.component.html',
  styleUrls: ['./view-product-detail.component.css']
})
export class ViewProductDetailComponent implements OnInit {


  id:any

  mCart:Cart={
    productId:0,
    productPrice:0,
    productAmount:1,
    productImage:"",
    userId:0,
    //prId:number;
    // cartPtotal:number;
    cartAmount:0,
  }
  // public productList : any;

  
  mProduct : any;

  constructor(private activatedRoute: ActivatedRoute,private rest: RestService, private location:Location ,private cart :CartService) { 
    this.mCart.productId = this.id
    console.log('id',this.id)
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      let id = params.id
      this.mProduct = await this.rest.getProductById(id).toPromise();

      // this.rest.getProducts()
      // .subscribe(res=>{
      //   this.productList = res;

        
      // this.productList.forEach((a:any) => {
      // Object.assign(a,{quantity:1,total:a.price});
      // });
      // })

      // this.productList.forEach((a:any) => {
      //   Object.assign(a,{quantity:1,total:a.price});
      //   });

    })


    
    // this.rest.getTypeProduct().subscribe(data=>{
    //   this.mtype = data
    //   console.log(this.mtype)
    // })

  }
  
  onClickCancel() {
    this.location.back()
  }

  public get timestamp(): string {
    return Date.now().toString()
  }

  addToCart(data:any){

    this.mCart.productId = data.productId
    this.mCart.productPrice = data.productPrice
    this.mCart.productImage = data.ProductImage
    this.mCart.userId = parseInt(localStorage.getItem("userId")!)
    console.log(JSON.stringify(this.mCart))
    this.cart.addCart(data);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Add cart success',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
