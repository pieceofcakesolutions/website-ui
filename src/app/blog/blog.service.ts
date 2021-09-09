import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogPost } from './models/BlogPost';
import { catchError, map, tap } from 'rxjs/operators';
import { GetBlogPostsResult } from './models/GetBlogPostsResult';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogPosts: BlogPost[];
  postsUrl: string = `${environment.blogUrl}/Posts`;
  constructor(private http: HttpClient) {
    this.blogPosts = [];
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /**
   * GET /Posts
   */
  getPosts(): Observable<GetBlogPostsResult> {
    return this.http.get<GetBlogPostsResult>(this.postsUrl)
      .pipe(
        tap(_ => this.log('fetched blog posts')),
        catchError(this.handleError<GetBlogPostsResult>('getPosts'))
      );
  }

  /**
   * GET /Posts/{id}
   */
  getPost(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.postsUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched blog post id=${id}`)),
        catchError(this.handleError<BlogPost>(`getPost id=${id}`))
      );
  }

    /**
   * GET /Posts?
   */
  /* GET heroes whose name contains search term */
  searchBlogPosts(term: string): Observable<BlogPost[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<BlogPost[]>(`${this.postsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<BlogPost[]>('searchBlogPosts', []))
    );
  }

  /** PUT: update the hero on the server */
  updatePost(post: BlogPost): Observable<any> {
    return this.http.put(`${this.postsUrl}/${post.id}`, post, this.httpOptions).pipe(
      tap(_ => this.log(`updated blogPost id=${post.id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  /**
   * POST /Posts
   */
  addPost(post: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.postsUrl, post, this.httpOptions).pipe(
      tap((newPost: BlogPost) => this.log(`added blogPost w/ id=${newPost.id}`)),
      catchError(this.handleError<BlogPost>('addBlogPost'))
    );
  }

  /**
   * DELETE /Posts
   */
  deletePost(post: BlogPost): Observable<any> {
    return this.http.delete<BlogPost>(`${this.postsUrl}/${post.id}`).pipe(
      tap((newPost: BlogPost) => this.log(`added blogPost w/ id=${newPost.id}`)),
      catchError(this.handleError<BlogPost>('addBlogPost'))
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

  log(message: string) {
    console.log(message)
  }
}
