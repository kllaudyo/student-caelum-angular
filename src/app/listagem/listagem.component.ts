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
    mensagem: string = '';

    constructor(service: FotoService) {
        this.service = service;
        service.lista().subscribe(
            fotos => this.fotos = fotos,
            error => console.log(error)
        );
    }

    excluir(foto: FotoComponent): void {
        console.log('excluir a foto: ' + foto.titulo);
        this.service.deletar(foto).subscribe(response => {
            const novasFotos = this.fotos.slice(0);
            const indice = novasFotos.indexOf(foto);
            novasFotos.splice(indice, 1);
            this.fotos = novasFotos;
            this.mensagem = 'Foto removida com sucesso';
        }, error => {
            this.mensagem = 'Foto não pode ser removida';
            console.log(error);
        });
    }

}

