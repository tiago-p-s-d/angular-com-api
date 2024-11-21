import { Injectable } from '@angular/core';
import { Deputado } from '../../model/deputado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  urlDeputados = 'https://dadosabertos.camara.leg.br/api/v2/deputados'
  constructor(private http: HttpClient) {

  }

  obterDeputados(nome:string): Observable<any> {
    const saida = this.http.get<any>(this.urlDeputados + `?nome=${nome}&ordem=ASC&ordenarPor=nome`);

    return saida
    }
}
