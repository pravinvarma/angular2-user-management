//import
import { Component, OnInit } from '@angular/core';
import { User }    from './user';
import { Router, ActivatedRoute, Params } from '@angular/router';

//decorate
@Component({
  selector: 'app-detail',
  templateUrl: './app.detail.html'
  /*,styleUrls: ['./app.login.css']*/
})

export class AppDetail implements OnInit{
selectedUser: User;
constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // get param
    let param = this.route.snapshot.params["id"];
    let userList = JSON.parse(localStorage.getItem('obj'));
      
    this.selectedUser = userList.filter(function(user){
        if(user.id == param){
            return user
        }
    });
    }
}