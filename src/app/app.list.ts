import { Component } from '@angular/core';
import { User }    from './user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './app.list.html'
  /*,styleUrls: ['./app.login.css']*/
})
export class AppList {
selectedUser: User;
constructor( private router: Router){this.router.navigate(['/applist']);  };
user = JSON.parse(localStorage.getItem('obj'));
onSelect(user: User):void{
this.selectedUser = user;
this.router.navigate(['/appdetail',{id:this.selectedUser.id}]);  };
}


