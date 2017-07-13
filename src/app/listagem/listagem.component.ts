import { Component } from '@angular/core';
import { FotoComponent } from '../../foto/foto.component';
import { FotoService } from '../../foto/foto.service';

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {

    service: FotoService;
    fotos: Object[] = [];

    constructor(service: FotoService) {
        this.service = service;
        service.lista().subscribe(
            fotos => this.fotos = fotos,
            error => console.log(error)
        );
    }

    excluir(foto: FotoComponent): void {
        console.log('excluir a foto: ' + foto.titulo);
        this.service.deletar(foto).subscribe(response => console.log('foto excluida com sucesso'), error => console.log(error));
    }

}

