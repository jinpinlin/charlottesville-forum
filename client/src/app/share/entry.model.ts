
export class Entry {
    public title: string;
    public desc: string;
    public imagePaths?: string[];
    constructor(title: string, desc: string, imagePaths?: string[]) {
        this.title = title;
        this.desc = desc;
        this.imagePaths = imagePaths;
    }
}
