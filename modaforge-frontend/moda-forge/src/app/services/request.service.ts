import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IP } from 'src/helpers/IP';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  

  constructor(
    private http: HttpClient
  ) { }

  API = IP.local;

  // createRequest(request: Request): Observable<Request>
  // {
  //   const headers = { 'content-type': 'application/json'}
  //   const body = JSON.stringify(request);
  //   return this.http.post<Request>(`${this.API}/api/Request`, body, {'headers': headers});
  // }

  // Get request by id
  getRequest(id: number): Observable<Request>
  {
    return this.http.get<Request>(`${this.API}/api/Request/${id}`);
  }



}

