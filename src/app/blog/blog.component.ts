import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  key: string | undefined;

  constructor(private route: ActivatedRoute){}
  ngOnInit() {
      this.route.paramMap.pipe(
          switchMap(params => params.getAll("key"))
      )
      .subscribe(data=> this.key = data);
    }
}
