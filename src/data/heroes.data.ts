export const Owner = {
    DC: 'DC',
    Marvel: 'Marvel'
} as const;

// This creates a Type based on the object above
export type Owner = (typeof Owner)[keyof typeof Owner];

export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: Owner.DC
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.Marvel
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.DC
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.Marvel
    },
];