export class Pet {
    id: number = null;
    category?: Category = null;
    name: string = null;
    photoUrls: string[] = [];
    status?: string = "AVAILABLE";
    tags?: Tag[] = [];
}

export class Category {
    id: number = null;
    name: string = null;
}

export class Tag {
    id: number = null;
    name: string = null;
}

export const AvailableCategories: Category[] = [
    { id: 1, name: "Dog" }
    , { id: 2, name: "Cat" }
    , { id: 3, name: "Python" }];