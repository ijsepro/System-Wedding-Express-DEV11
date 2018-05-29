import { Http } from '@angular/http';
import { DataServiceService } from './data-service.service';
import { Injectable } from '@angular/core';


@Injectable()
export class VendorSignupService extends DataServiceService {

  constructor(http: Http) { 
    super('http://localhost:8080/webapi/vendor', http);

  }

}
