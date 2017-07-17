import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    // Getposts return observable so we need to subscribe
    this.dataService.getPosts().subscribe((posts) => {
      //console.log('Posts Fetched');
      this.posts = posts;
    });
  }
}

// Struct for fetched posts
interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}
