import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})

export class Blog {

}

export class BlogListComponent {

  blogList: Blog[] = [];

  constructor(private ) {}

  ngOnInit() {}

}
