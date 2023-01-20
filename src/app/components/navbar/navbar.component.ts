import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public totalItem : number = 0;
  public totalItem1 : number = 0;
  constructor(private router:Router,private cart :CartService) { }

  ngOnInit(): void {
    this.cart.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })


    this.cart.getPizzas()
    .subscribe(rms=>{
      this.totalItem1 = rms.length;
    })
  }

  onLogout(){
    localStorage.removeItem(environment.loginResult)
    localStorage.clear();
    this.router.navigate(['viewer'])
  }

}
