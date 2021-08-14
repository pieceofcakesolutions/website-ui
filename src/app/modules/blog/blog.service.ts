import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogPost } from './models/BlogPost';
import { BLOG_POSTS } from './models/BLOG_POSTS';
import { catchError, map, tap } from 'rxjs/operators';
import { GetBlogPostsResult } from './models/GetBlogPostsResult';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogPosts: BlogPost[];
  blogUrl: string = environment.blogUrl;
  constructor(private http: HttpClient) {
    this.blogPosts = [];

  }


  getPosts(): Observable<GetBlogPostsResult> {
    return this.http.get<GetBlogPostsResult>(`${this.blogUrl}/Posts`)
      .pipe(
        tap(_ => this.log('fetched blog posts')),
        catchError(this.handleError<GetBlogPostsResult>('getPosts'))
      );
  }

  getPost(id: string): Observable<BlogPost> {

    return this.http.get<BlogPost>(`${this.blogUrl}/Posts/${id}`)
      .pipe(
        tap(_ => this.log(`fetched blog post id=${id}`)),
        catchError(this.handleError<BlogPost>(`getPost id=${id}`))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addPost(post: BlogPost) {
    this.blogPosts.push(post);
  }

  log(message: string) {
    console.log(message)
  }
}
