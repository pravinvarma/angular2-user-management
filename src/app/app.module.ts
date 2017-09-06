import { BrowserModule } from '@angular/platform-browser'; // You also import NgModules from Angular libraries using JavaScript import statements: import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // import Angular's Component decorator from the @angular/core library like this:
import { AppLogincomponent }     from './app.loginComponent';
import { AppList }     from './app.list';
import { AppDetail } from './app.detail';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';


@NgModule({ //..is a decorator function that takes single metadata object whose properties decscribe module- declarations
  declarations: [  //import, exports, providers, bootstrap
    AppComponent, //view classes - three types component, directive, pipes
      AppLogincomponent,
      AppList,
      AppDetail
  ],
  imports: [ // other modles whose exported classes are needed by component template are declared here
    BrowserModule,
      FormsModule ,
    RouterModule.forRoot([
      {
    path: 'login',
    component: AppLogincomponent
  },
     {
    path: 'applist',
    component: AppList
  },
    {
    path: 'appdetail',
    component: AppDetail
  },
         {
    path: '',
    component: AppList
  }
    ])
  ], //In the example of the simple root module above, the application module needs material from within that BrowserModule. To access that material, add it to the @NgModule metadata imports like this. imports:      [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent] // the main application view, called root component, that hosts all the views, only root module shall set
})
export class AppModule { }
