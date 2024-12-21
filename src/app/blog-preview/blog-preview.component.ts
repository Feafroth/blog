import { Component, Input } from '@angular/core';
import { BlogView } from '../models/blog-view';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent {

  @Input() blogView!: BlogView;

  constructor(private router: Router) {}

  click() {
    this.router.navigate(["blog/", this.blogView.key])
  }
}
