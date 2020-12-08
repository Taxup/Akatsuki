import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExitProfileGuard implements CanDeactivate<ComponentCanDeactivate> {

  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}
