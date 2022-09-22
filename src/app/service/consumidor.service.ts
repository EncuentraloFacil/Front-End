import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Consumidor } from '../model/consumidor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {
url:string="http://localhost:5000/consumidor"
private listaCambio = new Subject<Consumidor[]>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Consumidor[]>(this.url);
  }
  insertar(consumidor:Consumidor){
    return this.http.post(this.url,consumidor);
  }
  setLista(listaNueva: Consumidor[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(consumidor: Consumidor){
    return this.http.put(this.url + "/" + consumidor.id, consumidor);
  }
  listarId(id:number){
    return this.http.get<Consumidor>(`${this.url}/${id}`);
  }
}
