import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TrafficRestService {

  constructor(private http: HttpClient) { }

 getByVille(ville: string) {
  return this.http.get<any[]>('http://localhost:8082/traffic/'+ville);
 }

 getAllData(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8082/traffic/all');
}

getLatitudeLongitudeData(latitude: string, longitude: string): Observable<any> {
  const body = { latitude, longitude };
  console.log(body);
  return this.http.post<any>('http://localhost:8082/traffic/search', body);
}
}
