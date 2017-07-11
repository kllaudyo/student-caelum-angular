import {Component, Inject} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Caelum Pic';
    fotos: Object[] = [];

    constructor(http: Http) {

        http.get('http://localhost:3000/v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos,
                error => console.log(error)
            );

        // const stream = http.get('http://localhost:3000/v1/fotos');
        // stream.subscribe(response => {
        //    this.fotos = response.json();
        // });
    }
}
