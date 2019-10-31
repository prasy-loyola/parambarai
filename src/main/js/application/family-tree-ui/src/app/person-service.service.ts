import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person, Persons } from './person';
import { environment } from 'src/environments/environment';
import { RestResponse } from './rest-response';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private allPersonsEndPoint = environment.serviceEndpoint +"persons/";
  

  constructor(private http: HttpClient) {}

    getAllPersons(): Observable<RestResponse<Persons>> {
      return this.http.get<RestResponse<Persons>>(this.allPersonsEndPoint);
    }

   
}
