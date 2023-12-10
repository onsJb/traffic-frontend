import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrafficSoapService {
  private soapHeaders = {
    // Your SOAP headers here
  };

  constructor(private http: HttpClient) {}

  public callSoapService(): Observable<any> {
    const soapRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\
                          xmlns:web="http://www.example.com/">\
                           <soapenv:Header/>\
                           <soapenv:Body>\
                             <!-- Votre corps de requête SOAP ici -->\
                           </soapenv:Body>\
                         </soapenv:Envelope>`;

    return this.http.get('http://localhost:8085/traffic/all', {
      headers: this.soapHeaders,
      responseType: 'json',
    });
  }
}
