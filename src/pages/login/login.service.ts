import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "./login.model";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(model: LoginModel) {
    return this.http.post('placeholder', model);
  }
}
