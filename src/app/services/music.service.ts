import {Injectable} from "@angular/core";
import {LogService} from "./log.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MusicService {

  url: string = "http://localhost:3000/music"

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.url);
  }
}
