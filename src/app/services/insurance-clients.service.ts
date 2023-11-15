import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InsuranceClientsService {

  constructor(private http: HttpClient) {
  }

  private clientsUrl = 'https://insurance.algorithm.co.zw/api/getClients';
  getClientsList():Observable<any> {
    return this.http.get<any>(this.clientsUrl);
  }
}
