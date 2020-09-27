import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Opening} from "../pipe/opening";
import {Observable} from "rxjs";
import * as Http from "http";

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
      .map(res => res.json().data)
      .catch(res => console.log(res));
  }
}
