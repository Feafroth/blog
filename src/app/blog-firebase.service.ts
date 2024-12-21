import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Blog } from './models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogFirebaseService {

  private dbPath = '/blogs';

  blogsRef: AngularFireList<Blog>;

  constructor(private db: AngularFireDatabase) {
    this.blogsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Blog> {
    return this.blogsRef;
  }

  create(tutorial: Blog): any {
    return this.blogsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.blogsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.blogsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.blogsRef.remove();
  }
}
