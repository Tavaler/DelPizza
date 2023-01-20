//import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RestService } from 'src/app/services/rest.service';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-pizza-rm',
  templateUrl: './pizza-rm.component.html',
  styleUrls: ['./pizza-rm.component.css']
})

export class PizzaRmComponent implements AfterViewInit {

  public pizzas : any = [];
  public grandTotal1 !: number;

  public productList : any;
  public pizzaRmsList : any;
  rms:any


  constructor(public rest: RestService,private cart :CartService) { 
    this.feedData()
  }

  feedData() {
    //subscribe ทำหน้าที่ติดตามผลลัพธ์ที่ส่งกลับมาเหมือน async/await private router:Router,
    this.rest.getRms()
      .subscribe(data => {
        // console.log('hh',data)
        data.map(item => item.rmImage = this.rest.getRmImageUrl(item.rmImage))
        console.log('Data',data)
        this.rms=data;
      },
        error => {
          alert(JSON.stringify(error.error.message))
        },
        () => {
          console.log('complete')
        })
  }
//////////////////////////////////////////////////////////////////////////
  ngAfterViewInit() : void {
    this.rest.getRms()
    .subscribe(res=>{
      this.pizzaRmsList = res;

      
      this.pizzaRmsList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.rmPrice});
      });
    })

    this.pizzaRmsList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.rmPrice});
    });
    // this.cart.getPizzas()
    // .subscribe(rms=>{
    //   this.pizzas = rms;
    //   this.grandTotal1 = this.cart.getTotalPrice1();
    // })
   }

  //  ngOnInit() :void {
     
  //  }


  // onLogout(){
  //   localStorage.removeItem(environment.loginResult)
  //   this.router.navigate(['viewer'])
  // }

  public get timestamp(): string {
    return Date.now().toString()
  }

  addToCart(item: any){
    this.cart.addtoCart1(item);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Add cart success',
      showConfirmButton: false,
      timer: 1500
    })
  }

}