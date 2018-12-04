
export class Entry {
    id: string;
    title: string;
    title_en: string;
    desc: string;
    desc_en: string;
    user: string;
    created: Date;
    email: string;
    category: string;
    nego?: boolean;
    imagePaths?: string[];
    constructor(id: string,
                title: string,
                desc: string,
                user: string,
                email: string,
                category: string,
                nego: boolean,
                imagePaths?: string[]) {
        this.id = id;
        this.email = email;
        this.title = title;
        this.desc = desc;
        this.user = user;
        this.category = category;
        this.nego = nego;
        this.imagePaths = imagePaths;
    }
}
