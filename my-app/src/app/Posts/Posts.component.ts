import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-posts',
  templateUrl: './Posts.component.html',
  styleUrls: ['./Posts.component.css']
})
export class PostsComponent {

  posts = [];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.posts = data;
    });
  }

}
