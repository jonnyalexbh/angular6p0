import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
* decorator
*
*/
@Injectable()
/**
* RequestService
*
*/
export class RequestService {

  public url:string;
  /**
  * constructor
  *
  */
  constructor(private _http:HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }
  /**
  * getTest
  *
  */
  getTest() {
    return 'Hello world from service';
  }
  /**
  * getArticles
  *
  */
  getArticles() {
    return this._http.get(this.url);
  }

}
