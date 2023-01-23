import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IP } from 'src/helpers/IP';
import { Request } from 'src/modules/interfaces/request.interface';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  

  constructor(
    private http: HttpClient
  ) { }

  API = IP.local;

  // Get request by id
  getMyRequests(id: number): Observable<Request[]>
  {
    return this.http.get<Request[]>(`${this.API}/api/Request/Requester/${id}`);
  }

  createRequest(request: Request): Observable<Request>
  {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(request);
    return this.http.post<Request>(`${this.API}/api/Request`, body, {'headers': headers});
  }

  getAllPublicRequests() : Observable<Request[]>
  {
    return this.http.get<Request[]>(`${this.API}/api/Request/public`);
  }
}
