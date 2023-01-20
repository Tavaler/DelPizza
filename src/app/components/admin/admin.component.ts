import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private rest: RestService) { }
  isError:any
  ngOnInit(): void {
  }

  async onSubmit(value:any) {
    try {
      let result = await this.rest.Adminlogin(value).toPromise()
      if (result.msg == this.rest.OKS) {
        localStorage.setItem(environment.loginResult, this.rest.OKS)
        this.isError = null
        this.router.navigate(["blank-page"])
      } else {
        this.isError = result.msg
      }

    } catch (error) {
      this.isError = 'Http Error'
    }
  }


  onClickLogin() {
    this.router.navigate(['login'])
  }

}
