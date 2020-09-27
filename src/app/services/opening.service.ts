import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

import {Opening} from "../pipe/opening";

@Injectable()
export class OpeningService {
  constructor(private http: Http) {
  }

  /**
   * Load books from the static books.json data, usually an API URL.
   *
   * @return {Observable<Opening[]>} A list of books.
   */
  getOpenings(): Observable<Opening[]> {
    return this.http.get('app/data/opening.json')
      .pipe(map(res => res.json().data));
  }
}
