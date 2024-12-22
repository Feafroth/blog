import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Blog } from '../models/blog';
import { BlogJsonService } from '../blog-json.service';
import { Comment } from '../models/comment';
import * as uuid from 'uuid';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  key: string | undefined;
  blog!: Blog;
  isUserLoggedIn = false;
  userName!:string;
  comment!:string;

  constructor(private route: ActivatedRoute, private service: BlogJsonService){}
  ngOnInit() {
    let storeData = localStorage.getItem("User");
    if( storeData != null && JSON.parse(storeData).isLogedIn == "true") {
      this.isUserLoggedIn = true;
      this.userName = JSON.parse(storeData).name;
    } else {
      this.isUserLoggedIn = false;
      this.userName = '';
    }

    this.route.paramMap.pipe(
        switchMap(params => params.getAll("key"))
    )
    .subscribe(data=> {
      this.key = data
      this.blog = this.service.get(this.key);
    });
  }

  toggleLike() {
    const index = this.blog.likes.indexOf(this.userName);
    if (index != -1) {
      this.blog.likes.splice(index, 1);
    } else {
      this.blog.likes.push(this.userName);
    }
    this.service.update(this.blog.key, this.blog);
  }

  sendComment() {
    const newComment = new Comment();
    newComment.content = this.comment;
    newComment.date = new Date();
    newComment.userName = this.userName;
    newComment.key = uuid.v7();
    this.blog.comments.push(newComment);
    this.service.update(this.blog.key, this.blog);
    this.comment = "";
  }
}
