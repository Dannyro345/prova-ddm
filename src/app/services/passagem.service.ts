import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {

  constructor(private http:HttpClient) { }
  URL_BASE = "https://5d262f92eeb36400145c59c4.mockapi.io/passagem/";
  list(){
    return this.http.get(this.URL_BASE)
  }

  post(passagem){
    return this.http.post(this.URL_BASE, passagem)
  }

  delete(passagem){
    return this.http.delete(this.URL_BASE + passagem)
  }
}
