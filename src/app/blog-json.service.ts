import { Injectable } from '@angular/core';
import * as db from '../assets/db.json'
import { Blog } from './models/blog';
import { filter } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogJsonService {

   blogsRef: Blog[];

  constructor() {
    this.blogsRef = (db as any).default;
  };
  
    getAll(): Blog[] {
      return this.blogsRef;
    }

    get(key: string): Blog {
      return this.blogsRef.filter((blog) => blog.key === key)[0];
    }

    // create(tutorial: Blog): any {
    //   return this.blogsRef.push(tutorial);
    // }
  
    update(key: string, value: any): Promise<void> {
      const blog = this.blogsRef.find((blog) => blog.key === key);
      if (blog !== undefined) {
        const index = this.blogsRef.indexOf(blog);
        this.blogsRef.splice(index, 1);
        this.blogsRef.push(value);
      }
      return Promise.resolve();
    }
  
    // delete(key: string): Promise<void> {
    //   return this.blogsRef.remove(key);
    // }
  
    // deleteAll(): Promise<void> {
    //   return this.blogsRef.remove();
    // }
}
