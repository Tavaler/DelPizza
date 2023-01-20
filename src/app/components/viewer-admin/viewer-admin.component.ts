import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-viewer-admin',
  templateUrl: './viewer-admin.component.html',
  styleUrls: ['./viewer-admin.component.css']
})
export class ViewerAdminComponent implements AfterViewInit {



  constructor(private router:Router,public rest: RestService) { }


  ngAfterViewInit() {

  }
  onLogout(){
    localStorage.removeItem(environment.loginResult)
    this.router.navigate(['viewer'])
  }

}


