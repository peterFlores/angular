import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,  Route } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './About/About.component';
import { PostsComponent } from './Posts/Posts.component';

const routes: Route[] = [
  {path: '', component: PostsComponent },
  {path: 'about', component: AboutComponent },
  {path: 'users', component: UserComponent },

];

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      AboutComponent,
      PostsComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
   ],
   providers: [
      DataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
