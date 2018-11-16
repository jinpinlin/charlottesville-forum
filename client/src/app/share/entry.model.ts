
export class Entry {
    public title: string;
    public desc: string;
    public user: string;
    public nego?: boolean;
    public imagePaths?: string[];
    constructor(title: string, desc: string, user: string, nego: boolean, imagePaths?: string[]) {
        this.title = title;
        this.desc = desc;
        this.user = user;
        this.nego = nego;
        this.imagePaths = imagePaths;
    }
}
