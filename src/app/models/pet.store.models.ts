export interface Pet {
    id: number;
    category?: Category;
    name: string;
    photoUrls: string[];
    status?: string;
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

export const AvailableCategories: Category[] = [
    { id: 1, name: "Dog" }
    , { id: 2, name: "Cat" }
    , { id: 3, name: "Python" }];