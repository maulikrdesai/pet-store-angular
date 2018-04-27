export interface Pet {
    id: number;
    category: Category;
    name: string;
    photoUrls?: string[];
    status: string;
    tags?: Tag[];
}
export interface Category {
    id: number;
    name: string;
}

export interface Tag {
    id: number;
    name: string;
}
