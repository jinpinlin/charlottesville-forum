import { Entry } from './entry.model';

export class RentingEntry extends Entry {
    rentingItems?: Array<{itemName: string, itemNum: Number; price: Number, image: string}>;

    constructor(
        id: string,
        title: string,
        desc: string,
        user: string,
        email: string,
        category: string,
        nego: boolean,
        imagePaths?: string[],
        rentingItems?: Array<{itemName: string, itemNum: number, price: number, image: string }>) {
        super(id, title, desc, user, email, category, nego, imagePaths);
        this.rentingItems = rentingItems;
    }
}
