import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = route.path;
    console.log('Url:' + url);
    if (url == 'admin') {
      alert('You are visiting admin pages')
      return true;
    }
    alert('Not admin');
    return true;
  }
}
