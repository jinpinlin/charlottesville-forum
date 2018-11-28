
export class Entry {
    id: string;
    title: string;
    desc: string;
    user: string;
    nego?: boolean;
    imagePaths?: string[];
    constructor(id: string, title: string, desc: string, user: string, nego: boolean, imagePaths?: string[]) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.user = user;
        this.nego = nego;
        this.imagePaths = imagePaths;
    }
}
