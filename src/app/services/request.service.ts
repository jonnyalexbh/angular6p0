import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
* decorator
*
*/
@Injectable()
/**
* RequestService
*
*/
export class RequestService{
  /**
  * getTest
  *
  */
  getTest(){
    return 'Hello world from service';
  }

}
