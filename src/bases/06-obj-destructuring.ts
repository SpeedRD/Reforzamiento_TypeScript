interface Hero {
    alias: string;
    age: number;
    role: string;
}

const hero: Hero = {
    alias: 'Batman',
    age: 35,
    role: 'Detective'
};

// Basic extraction
const { alias, age, role } = hero;
console.log(alias, age, role);

// Aliases and Default Values
// for properties that don't exist on the strict interface.
const { role: job, alias: n, status = 'Active' } = hero as any; 
console.log(n, job, status);

// Destructuring in function arguments
const printHeroArgs = ({ age, role }: Hero) => {
    console.log(age, role);
};

printHeroArgs(hero);

// Nested destructuring example
const returnContext = ({ role, age }: Hero) => {
    return {
        keyName: role,
        years: age,
        coords: {
            lat: 14.1232,
            lng: -12.3232
        }
    };
};

const { keyName, years, coords: { lat, lng } } = returnContext(hero);
console.log(keyName, years, lat, lng);