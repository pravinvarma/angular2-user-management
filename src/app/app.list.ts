import { Component } from '@angular/core';
import { Hero }    from './hero';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './app.list.html'
  /*,styleUrls: ['./app.login.css']*/
})
export class AppList {
    constructor( private router: Router){this.router.navigate(['/applist']); };
    user = JSON.parse(localStorage.getItem('obj'));

}

