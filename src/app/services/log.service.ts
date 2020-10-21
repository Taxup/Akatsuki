import {Injectable} from "@angular/core";

@Injectable()
export class LogService {
  write(message) {
    console.log("logs -> "+message)
  }
}
