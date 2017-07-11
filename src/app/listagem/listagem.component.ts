import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {

    fotos: Object[] = [];

    constructor(http: Http) {
        http.get('http://localhost:3000/v1/fotos')
            .map(response => response.json())
            .subscribe(
                fotos => this.fotos = fotos,
                error => alert(error)
            );
    }

}

