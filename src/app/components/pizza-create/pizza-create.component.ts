import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/Models/product.model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.css']
})
export class PizzaCreateComponent implements OnInit {

  Pr: any;
  mPizza: any = {
    rmName: "",
  }
  backendUrl = environment.backendUrl;

  constructor(private location: Location, private rest: RestService) { }

  ngOnInit(): void {
    this.rest.getRms().subscribe(data => {
      this.Pr = data
      console.log(this.Pr)
    })
  }

  onClickCancel() {
    this.location.back()
  }

  onAddPr(prForm: NgForm) {
    if (prForm.invalid) return;

    this.rest.addPr(this.Pr).subscribe(
      (response) => {

        if (response.msg == this.rest.OK) {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                imageUrl: 'https://yt3.ggpht.com/a/AATXAJyDbRJXsX96yVYWq0vX6vuX5ua5puk26bTKoSkO=s900-c-k-c0xffffffff-no-rj-mo',
                imageWidth: 400,
                imageHeight: 200,
                title: 'Add!',
                footer: 'success',
              }


              )
              this.location.back()
            }
          })


        } else {
          Swal.fire({
            imageUrl: 'https://yt3.ggpht.com/a/AATXAJyDbRJXsX96yVYWq0vX6vuX5ua5puk26bTKoSkO=s900-c-k-c0xffffffff-no-rj-mo',
            imageWidth: 400,
            imageHeight: 200,
            title: 'Oops...',
            text: response.msg,
            footer: '<a href>Why do I have this issue?</a>'
          })
        }

      },
      (error) => {
        alert('Http error')
      }
    )

  }


}


