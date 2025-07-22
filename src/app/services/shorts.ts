import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Short } from '../models/short.model';

@Injectable({
  providedIn: 'root'
})
export class ShortsService {
  private apiUrl = 'https://localhost:44300/api/Shorts';

  constructor(private http: HttpClient) {}

  getAllShorts(): Observable<Short[]> {
    return this.http.get<Short[]>(this.apiUrl);
  }
}
