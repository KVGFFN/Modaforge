import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IP } from 'src/helpers/IP';
import { LocalModel } from 'src/modules/interfaces/local.model.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalModelService {

  constructor
  (
    private http: HttpClient
  ) { }

  API = IP.local;

  createModel(model: LocalModel) : Observable<LocalModel>
  {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(model);
    return this.http.post<LocalModel>(`${this.API}/api/Model`, body, { 'headers': headers });
  }
}
