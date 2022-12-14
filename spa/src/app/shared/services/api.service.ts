import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getData<Type>(resource: string) {
    return this.http.get<Type>(environment.getDataUrl(resource));
  }
}
