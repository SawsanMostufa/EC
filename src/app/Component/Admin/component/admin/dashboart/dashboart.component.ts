import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboart',
  templateUrl: './dashboart.component.html',
  styleUrls: ['./dashboart.component.scss']
})
export class DashboartComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  public logout() {
    let _token = localStorage.getItem('token');
    let _displayName = localStorage.getItem('displayName');

    // this.spinner.show();
              
      if (_token && _displayName) {
        localStorage.removeItem('token');
        localStorage.removeItem('displayName');
        this.router.navigate(['/admin/login']);
       
      }
      else{
        localStorage.removeItem('token');
        localStorage.removeItem('displayName');
        localStorage.removeItem('userData'); 

        this.router.navigate(['/admin/login']);
        // this.spinner.hide();
        // return !this.jwtHelpler.isTokenExpired(_token);
      }
   
  }
}
