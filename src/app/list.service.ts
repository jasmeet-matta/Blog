import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Ilist } from './list';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private _url: string = "/assets/data/list.json"

  constructor(private http: HttpClient) { }

  getList(): Observable<Ilist[]>{
    return this.http.get<Ilist[]>(this._url);
  }

}
