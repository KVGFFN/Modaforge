import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IP } from 'src/helpers/IP';
import { Model } from 'src/modules/interfaces/model.interface';
import { Region } from 'src/modules/interfaces/user.interface';

// export interface Request 
// {
//   id: number;
//   title: string;
//   description: string;
//   status: number;
//   creationDate: Date;
//   acceptedDate?: Date;
//   doneDate?: Date;

//   requesterId?: number;
//   providerId?: number;
//   modelId?: number;

//   regionId?: number;

//   requester?: Requester;
//   provider?: Provider;
//   model?: Model;
//   region?: Region;

// }

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



}

