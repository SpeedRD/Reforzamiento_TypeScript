
import { heroes, type Hero } from '../data/heroes.data';

// Función para buscar héroe por ID
// Retorna un Hero o undefined si no lo encuentra
export const getHeroById = ( id: number ): Hero | undefined => {
    return heroes.find( hero => hero.id === id );
}

// Pruebas mencionadas en el video
console.log( getHeroById(1) ); // Batman
console.log( getHeroById(2) ); // Spiderman
console.log( getHeroById(7) ); // undefined