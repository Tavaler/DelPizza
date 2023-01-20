import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/Models/product.model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  mtype:any
  mProduct: any = {
    ptypeName:"",
  }


  public imageSrc: any = null;
  backendUrl = environment.backendUrl;

  constructor(private rest: RestService, private location: Location) { }

  ngOnInit(): void {
    this.rest.getTypeProduct().subscribe(data=>{
      this.mtype = data
      console.log(this.mtype)
    })
  }

  onClickCancel() {
    this.location.back()
  }

  onAddProduct(productForm: NgForm) {
    if (productForm.invalid) return;

    this.rest.addProduct(this.mProduct).subscribe(
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
                imageUrl: 'https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif',
            imageWidth: 400,
            imageHeight: 200,
            title: 'Add!',
            footer:'success',
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

  

  onUploadImage(event: any) {
    this.mProduct.upfile = event.target.files[0]; //upload to server

    // Show preview image
    if (this.mProduct.upfile) {
      const reader = new FileReader();
      reader.onload = e => (this.imageSrc = reader.result);
      reader.readAsDataURL(this.mProduct.upfile);
    }
  }


  onSubmit() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }


}
