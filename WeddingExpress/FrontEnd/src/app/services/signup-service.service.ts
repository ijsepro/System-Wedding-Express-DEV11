import { DataServiceService } from './data-service.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SignupServiceService extends DataServiceService {

  constructor(http: Http) {
    super('http://localhost:8080/webapi/user', http);
   }
}
