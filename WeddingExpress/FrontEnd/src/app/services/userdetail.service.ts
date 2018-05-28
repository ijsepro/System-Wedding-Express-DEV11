import { DataServiceService } from './data-service.service';
import { Injectable } from '@angular/core';
import { Http ,RequestOptions,Headers} from '@angular/http';

@Injectable()
export class UserdetailService extends DataServiceService {

  constructor( http: Http) {
    super('http://localhost:8080/webapi/userdetail', http);
   }
}
