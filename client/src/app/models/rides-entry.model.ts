import { Entry } from './entry.model';

interface RidesInfo {
    departureLoc: string;
    arrivalLoc: string;
    departureTime: string;
    arrivalTime: string;
    num: number;
    price: number;
}

export class RidesEntry extends Entry {
    ridesInfo?: Array<RidesInfo>;

    constructor(
        id: string,
        title: string,
        desc: string,
        user: string,
        email: string,
        category: string,
        nego: boolean,
        imagePaths?: string[],
        ridesInfo?:  Array<RidesInfo>) {
        super(id, title, desc, user, email, category, nego, imagePaths);
        this.ridesInfo = ridesInfo;
    }
}
