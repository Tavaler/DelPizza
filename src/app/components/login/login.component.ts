import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private rest: RestService) { }
  isError : any

  ngOnInit(): void {
    if (this.rest.isLoggedIn()) {
      this.router.navigate(["home"])
    }
  }

  async onSubmit(value:any) {
    try {
      let result = await this.rest.login(value).toPromise()
      if (result.msg == this.rest.OK) { 
        localStorage.setItem(environment.loginResult, this.rest.OK)
        localStorage.setItem("userId",result.data)
        this.isError = null
        this.router.navigate(["/home"])
      } else {
        this.isError = result.msg
        alert(this.isError)
      }

    } catch (error) {
      this.isError = 'Http Error'
    }
  }

  onClickRegister() {
    this.router.navigate(['register'])
  }
  
  onClickAdmin() {
    this.router.navigate(['admin'])
  }

}
