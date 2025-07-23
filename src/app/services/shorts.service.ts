import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ShortsService {
  private apiUrl = 'http://localhost:44396/Shorts/GetAllShorts'; // Updated to match MVC endpoint

  constructor(private http: HttpClient) {}

  getShorts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
