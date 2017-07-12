import { Component, Input } from '@angular/core';
import { FotoComponent } from '../../foto/foto.component';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();

    public cadastrar(event) {
        event.preventDefault();
        console.log(this.foto);
    }
}
