import { Component } from '@angular/core';
import { FotoComponent } from '../../foto/foto.component';
import { FotoService } from '../../foto/foto.service';

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {

    fotos: Object[] = [];

    constructor(service: FotoService) {
        service.lista().subscribe(
            fotos => this.fotos = fotos,
            error => console.log(error)
        );
    }

}

