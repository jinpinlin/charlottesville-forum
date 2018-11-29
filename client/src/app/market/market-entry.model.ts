import { Entry } from '../share/entry.model';

export class MarketEntry extends Entry {
    marketItems?: Array<{itemName: string, itemNum: Number; price: Number, image: string}>;

    constructor(
        id: string,
        title: string,
        desc: string,
        user: string,
        nego: boolean,
        imagePaths?: string[],
        marketItems?: Array<{itemName: string, itemNum: number, price: number, image: string }>) {
        super(id, title, desc, user, nego, imagePaths);
        this.marketItems = marketItems;
    }
}
