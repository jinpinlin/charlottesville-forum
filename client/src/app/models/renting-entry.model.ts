import { Entry } from './entry.model';

interface RentingInfo {
    location: string;
    startTime: string;
    endTime: string;
    num: number;
    price: number;
}


export class RentingEntry extends Entry {
    rentingInfo?: Array<RentingInfo>;

    constructor(
        id: string,
        title: string,
        desc: string,
        user: string,
        email: string,
        category: string,
        nego: boolean,
        imagePaths?: string[],
        rentingInfo?: Array<RentingInfo>) {
        super(id, title, desc, user, email, category, nego, imagePaths);
        this.rentingInfo = rentingInfo;
    }
}
