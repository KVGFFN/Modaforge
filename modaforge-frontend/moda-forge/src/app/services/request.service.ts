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

  getRequestById(id: number): Observable<Request> {
    return this.http.get<Request>(`${this.API}/api/Request/${id}`);
  }

  updateRequest(request: Request, id: number): Observable<Request> {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(request);
    return this.http.put<Request>(`${this.API}/api/Request/${id}`, body, {'headers': headers});
  }

  getAllRequestByProviderId(id: number): Observable<Request[]>{
    return this.http.get<Request[]>(`${this.API}/api/Request/Provider/${id}`);
  }

  acceptRequest(requestId: number, providerId: number) : Observable<Request> {
    const headers = { 'content-type': 'application/json'}
    return this.http.put<Request>(`${this.API}/api/Request/AcceptRequest/${requestId}/${providerId}`, {'headers' : headers})
  }

  rejectRequest(requestId: number, providerId: number) : Observable<Request> {
    const headers = { 'content-type': 'application/json'}
    return this.http.put<Request>(`${this.API}/api/Request/${requestId}/${providerId}`, {'headers' : headers})
  }

  finishRequest(requestId: number, providerId: number) : Observable<Request> {
    const headers = { 'content-type': 'application/json'}
    return this.http.put<Request>(`${this.API}/api/Request/FinishRequest/${requestId}/${providerId}`, {'headers' : headers})
  }

  inProgressRequest(requestId: number, providerId: number) : Observable<Request> {
    const headers = { 'content-type': 'application/json'}
    return this.http.put<Request>(`${this.API}/api/Request/InProgressRequest/${requestId}/${providerId}`, {'headers' : headers})
  }

}
