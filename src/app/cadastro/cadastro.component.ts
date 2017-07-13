import { Component, Input } from '@angular/core';
import { FotoComponent } from '../../foto/foto.component';
import { FotoService } from '../../foto/foto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    formulario: FormGroup;
    service: FotoService;

    constructor(service: FotoService, builder: FormBuilder) {
        this.service = service;
        this.formulario = builder.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            url: ['', Validators.required],
            descricao: ['', '']
        })
    }

    public cadastrar(event) {
        event.preventDefault();
        this.service.cadastro(this.foto).subscribe(() => {
            this.foto = new FotoComponent();
            console.log('Foto salva com sucesso');
        }, error => console.log(error));

    }
}
