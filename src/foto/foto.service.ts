import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;
    url = 'http://localhost:3000/v1/fotos';

    constructor(http: Http) {
         this.http = http;
         this.headers = new Headers();
         this.headers.append('Content-Type', 'application/json');
    }

    lista(): Observable<FotoComponent[]> {
        return this.http.get(this.url).map(response => response.json());
    }

    cadastro(foto: FotoComponent): Observable<Response> {
        return this.http.post(this.url, JSON.stringify(foto), {headers: this.headers});
    }

    deletar(foto: FotoComponent): Observable<Response> {
        return this.http.delete(this.url + '/' + foto._id);
    }
}
