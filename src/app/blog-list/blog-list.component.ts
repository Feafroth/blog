import { Component } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogPreviewComponent } from '../blog-preview/blog-preview.component';

// import { BlogFirebaseService } from '../blog-firebase.service';
import { BlogJsonService } from '../blog-json.service';
import { BlogView } from '../models/blog-view';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})

export class BlogListComponent {

  // blogList!: AngularFireList<Blog>;

  blogList!: Blog[]; 
  blogPreviewList: Set<BlogView> = new Set<BlogView> ();
  tagsRequest: string = "";

  // constructor(private service: BlogFirebaseService) {}
  constructor(private service: BlogJsonService) {}

  ngOnInit() {
    this.blogList = this.service.getAll();
    this.prepareView();
  }
  
  prepareView() {
    const tags = this.tagsRequest.split(" ");
    this.blogPreviewList = new Set<BlogView>();
    if (this.tagsRequest.trim().length === 0) {
      this.blogList.forEach((blog) => {
        const blogPreview = new BlogView();
        blogPreview.key = blog.key;
        blogPreview.title = blog.title;
        blogPreview.tags = blog.tags
        blogPreview.likesN = blog.likes.length;
        blogPreview.commentsN = blog.comments.length;
        blogPreview.preview = blog.content.substring(0, 100)+"...";
        this.blogPreviewList.add(blogPreview);
      });
    } else {
      tags.forEach((tag) => {
        this.blogList.filter((blog) => blog.tags.includes(tag)).forEach((blog) => {
          const blogPreview = new BlogView();
          blogPreview.key = blog.key;
          blogPreview.title = blog.title;
          blogPreview.tags = blog.tags
          blogPreview.likesN = blog.likes.length;
          blogPreview.commentsN = blog.comments.length;
          blogPreview.preview = blog.content.substring(0, 100);
          this.blogPreviewList.add(blogPreview);
        });
      });
    }
  }
}
