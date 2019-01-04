import { Entry } from './entry.model';

// Can add more things
export class OthersEntry extends Entry {
    constructor(
        id: string,
        title: string,
        desc: string,
        user: string,
        email: string,
        category: string,
        nego: boolean,
        imagePaths?: string[]) {
     super(id, title, desc, user, email, category, nego, imagePaths);
    }
}
