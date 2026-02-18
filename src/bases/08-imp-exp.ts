// bases/08-imp-exp.ts

import { heroes, type Hero, Owner } from '../data/heroes.data';

// ... (previous getHeroById code) ...

export const getHeroById = (id: number): Hero | undefined => {
    return heroes.find(hero => hero.id === id);
}

// HOMEWORK SOLUTION
// Filter heroes by Owner Enum
export const getHeroesByOwner = (owner: Owner): Hero[] => {
    return heroes.filter(hero => hero.owner === owner);
}

/* Short syntax mentioned in video (optional):
   export const getHeroesByOwner = (owner: Owner) => heroes.filter(h => h.owner === owner);
*/