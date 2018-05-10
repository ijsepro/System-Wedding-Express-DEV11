import { NotFoundError } from './../common/not-found-error';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { BadInput } from '../common/bad-inputs';
import { AppError } from '../common/app-error';


@Injectable()
export class DataServiceService {

  constructor(private URL: string, private http: Http) { }

  getAll(){
    return this.http.get(this.URL)
     .map(response => response.json())   
     .catch(this.handleError);
  }

  create(resource){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.URL + '/crt' , JSON.stringify(resource), options)
    .map(response => response.json())
    .catch(this.handleError);
  }

  update(resource){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.URL + '/upt', JSON.stringify(resource), options)
    .map(response => response.json())
    .catch(this.handleError);
  }

  delete(resource){
    return this.http.delete(this.URL + '/alien/' + resource.points, JSON.stringify({isRead: true}))
    .map(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response){
    if (error.status === 404){
        console.log(error.status);
        return Observable.throw(new NotFoundError());
    }
    else if(error.status === 400){
        console.log(error.status);
        return Observable.throw(new BadInput());
    }else{
        console.log(error.status);
        return Observable.throw(new AppError(error));
    }
  }

}
