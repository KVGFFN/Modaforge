import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { currentUser } from 'src/helpers/CurrentUser';
import { IP } from 'src/helpers/IP';
import { Request } from 'src/modules/interfaces/tempinterfaces/request.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor
  (
    private http: HttpClient
  ) { }

  API = IP.local;

  getRequest(id: number): Observable<Request[]>
  {
    return this.http.get<Request[]>(`${this.API}/api/Request/${id}`);
  }

  createRequest(request: Request, id: number) : Observable<Request>
  {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(request);
    return this.http.post<Request>(`${this.API}/api/Request/${id}`, body, {'headers': headers});
  }
}
