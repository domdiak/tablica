export interface Card {
    categoryId: number;
    createdAt: Date;
    description: string;
    id: number;
    link: string;
    title: string;
}

export interface Category {
    id: number;
    name: string;
    updatedAt: Date;
    createdAt: Date;
    userId: number;
    cards: Card[];
}

export interface User {
    first: string;
    last: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    categories: Category[];
    cards: Card[];
}
