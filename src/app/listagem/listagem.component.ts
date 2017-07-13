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
            // .filter(foto => (foto.titulo || '').length > 0)
            .subscribe(
                fotos => {
                     // for (let i = 0, len = fotos.length; i < len; i++) {
                     //     if (fotos[i].titulo.length === 0) { continue };
                     //     this.fotos[this.fotos.length++] = fotos[i];
                     // }
                    // console.log('total ' + this.fotos.length);
                    this.fotos = fotos.filter(foto => (foto.titulo || '').length > 0 );
                },
                error => alert(error)
            );
    }

}

