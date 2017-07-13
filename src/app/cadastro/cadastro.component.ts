import { Component, Input } from '@angular/core';
import { FotoComponent } from '../../foto/foto.component';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public cadastrar(event) {
        event.preventDefault();
        console.log(this.foto);
        const header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http
            .post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto), {headers: header})
            .subscribe(
                function(){
                    this.foto = new FotoComponent();
                    console.log('Foto salva com sucesso');
                },
                function(error){
                    console.log(error);
                }
                // () => {
                //     this.foto = new FotoComponent();
                //     console.log('Foto salva com sucesso');
                // },
                // error => console.log(error)
            );
    }
}
