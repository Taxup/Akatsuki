import {Injectable} from "@angular/core";
import {LogService} from "./log.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MangaService {

  url: string = "http://localhost:3000/manga"

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.url);
  }
}
