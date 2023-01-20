import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  utitle : any
  muser : any = {
    titleName: "",
  }

  constructor(private location: Location, private rest: RestService) { }

  isError: any

  ngOnInit(): void {
    // this.rest.getTitleUser().subscribe(data=>{
    //   this.utitle = data
    //   console.log(this.utitle)
    // })
  }

  // ngOnInit(): void {
  // }

  onBack() {
    this.location.back()
  }

  async onSubmit(value: any) {
    try {
      let result = await this.rest.Register(value).toPromise()
      if (result.msg == this.rest.OK) {
        localStorage.setItem(environment.loginResult, this.rest.OK)
        this.isError = null
        this.location.back()
        // this.router.navigate(["login"])
      } else {
        this.isError = result.msg
      }

    } catch (error) {
      this.isError = 'Http Error'
    }

  }

  // onSubmit() {
  //   Swal.fire({
  //     title: 'Sweet!',
  //     text: 'Modal with a custom image.',
  //     imageUrl: '',
  //     imageWidth: 400,
  //     imageHeight: 200,
  //     imageAlt: 'Custom image',
  //   })
  // }
}
