import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class PainelComponent implements OnInit {
    @Input() titulo: string;

    ngOnInit() {
        this.titulo = this.titulo.length > 7 ? `${this.titulo.substr(0, 7 )}...` : this.titulo;
    }
}

//ViewEncapsulation.Emulated -> básico
//ViewEncapsulation.Native -> o do site
//ViewEncapsulation.Emulated -> faz nada