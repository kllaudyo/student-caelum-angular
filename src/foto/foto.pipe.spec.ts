import {FotoComponent} from './foto.component';
import {FiltroPorTitulo} from './foto.pipes';
describe('filtroPortituloPipe', () => {
    it('deveria filtrar a fots de futebol', () => {
        const foto1 = new FotoComponent();
        foto1.titulo = 'Futebol';
        const foto2 = new FotoComponent();
        foto2.titulo = 'leao';
        const fotos: FotoComponent[] = [foto1, foto2];
        const filtro: FiltroPorTitulo = new FiltroPorTitulo();
        expect(filtro.transform(fotos, 'Futebol').length).toBe(1);
    });
});
