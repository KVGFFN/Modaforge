import { Injectable } from '@angular/core';
import { IP } from 'src/helpers/IP';
import { HttpClient } from '@angular/common/http';
import { Provider } from 'src/modules/interfaces/provider.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  API = IP.local;

  // Get all providers
  getAllProviders()
  {
    return this.http.get<Provider[]>(`${this.API}/api/Provider`);
  }

  // Add provider
  addProvider(provider: Provider): Observable<Provider>
  {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(provider);
    return this.http.post<Provider>(`${this.API}/api/Provider`, body, {'headers': headers});
  }

  // Get specific provider
  getProvider(id: number): Observable<Provider>
  {
    return this.http.get<Provider>(`${this.API}/api/Provider/${id}`);
  }

  // Update provider
  updateProvider(provider: Provider): Observable<Provider>
  {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(provider);
    return this.http.put<Provider>(`${this.API}/api/Provider/${provider.id}`, body, {'headers': headers});
  }
}
