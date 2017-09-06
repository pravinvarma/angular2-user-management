import { Component } from '@angular/core';
import { User }    from './user';
import { Router } from '@angular/router';
@Component({ //@Component decorator, tells angular is a component and attach metadata to it to be a angular component
  selector: 'app-login',
  templateUrl: './app.login.html'
  /*,styleUrls: ['./app.login.css']*/
})
export class AppLogincomponent {
constructor( private router: Router){};
  model = new User(null,'',''); 
  submitted = false;
    arr = JSON.parse(localStorage.getItem('obj')) || [];
    idC = this.arr.length-1;
onSubmit(model1) {
   this.idC++;
this.submitted = true; 
    this.arr.push({id:this.idC, name: model1.name, email:model1.email});
    console.log(this.arr);
localStorage.setItem('obj',JSON.stringify(this.arr));
this.router.navigate(['/applist']); };

}
