import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable, throwError} from "rxjs";

import {Opening} from "../pipe/opening";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OpeningService {
  constructor(private http: Http) {
  }


  /**
   * Load books from the static books.json data, usually an API URL.
   *
   * @return {Observable<Opening[]>} A list of books.
   */
  getOpenings(): Observable<any[]> {
    return this.http.get('./assets/opening.json')
      .pipe(
      map(value => value.json().data),
      catchError(OpeningService.handleErrorObservable)
    );
  }


  private static handleErrorObservable (error: Response | any)
  {
    return throwError(error.message || error);
  }

}
