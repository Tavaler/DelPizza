import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Rm } from 'src/app/Models/product.model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-rms-create',
  templateUrl: './rms-create.component.html',
  styleUrls: ['./rms-create.component.css']
})
export class RmsCreateComponent implements OnInit {


 mRm : any

  public imageSrc: any = null;
  backendUrl = environment.backendUrl;

  constructor(private rest: RestService, private location: Location) { }

  ngOnInit(): void {}
  

  onClickCancel() {
    this.location.back()
  }

  onAddRm(rmForm: NgForm) {
    if (rmForm.invalid) return;

    this.rest.addRm(this.mRm).subscribe(
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
    this.mRm.upfile = event.target.files[0]; //upload to server

    // Show preview image
    if (this.mRm.upfile) {
      const reader = new FileReader();
      reader.onload = e => (this.imageSrc = reader.result);
      reader.readAsDataURL(this.mRm.upfile);
    }
  }

  onSubmit() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: '',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }



}
