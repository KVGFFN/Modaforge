import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IP } from 'src/helpers/IP';
import { Request } from 'src/modules/interfaces/request.interface';

interface GetRequest
{
  id: number;
  acceptedDate: any,
  creationDate: any,
  doneDate: any,
  model: any,
  modelId: any,
  provider: any,
  providerId: any,
  region: any,
  regionId: any,
  requester: any,
  requesterId: any,
  status: any,
  title: any,
  description: any,
  tags: any,
}

@Injectable({
  providedIn: 'root'
})


export class RequestService {
  

  constructor(
    private http: HttpClient
  ) { }

  API = IP.local;

  // Get request by id
  getMyRequests(id: number): Observable<GetRequest[]>
  {
    return this.http.get<GetRequest[]>(`${this.API}/api/Request/Requester/${id}`);
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

  /*Get the name of the user from the requestId
  getRequesterName(requestId: number): Observable<string>
  {
    return this.http.get<string>(`${this.API}/api/Request/RequesterName/${requestId}`);
  }*/
}
