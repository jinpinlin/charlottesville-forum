import { Entry } from '../share/entry.model';

export class MarketEntry extends Entry {
    marketItems?: Array<{itemName: string, itemNum: number }>;

    constructor(title: string, desc: string, imagePaths?: string[], marketItems?: Array<{itemName: string, itemNum: number }>) {
        super(title, desc, imagePaths);
        this.marketItems = marketItems;
    }
}
