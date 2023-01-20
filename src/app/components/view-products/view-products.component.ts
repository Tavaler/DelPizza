import { AfterViewInit, Component, } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { RestService } from 'src/app/services/rest.service';



@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements AfterViewInit {

  products:any


  constructor(private router:Router,public rest: RestService) { 
    this.feedData()
  }

  feedData() {
    //subscribe ทำหน้าที่ติดตามผลลัพธ์ที่ส่งกลับมาเหมือน async/await
    this.rest.getProducts()
      .subscribe(data => {
        // console.log('hh',data)
        data.map(item => item.productImage = this.rest.getProductImageUrl(item.productImage))
        console.log('Data',data)
        this.products=data;
      },
        error => {
          alert(JSON.stringify(error.error.message))
        },
        () => {
          console.log('complete')
        })
  }

  ngAfterViewInit() { }


  onLogout(){
    localStorage.removeItem(environment.loginResult)
    this.router.navigate(['viewer'])
  }



  public get timestamp(): string {
    return Date.now().toString()
  }


}