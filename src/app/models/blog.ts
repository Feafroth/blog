import { Comment } from "./comment";

export class Blog {
    key!: string;
    title!: string;
    tags!: string[];
    content!: string;
    likes!: string[];
    comments!: Comment[]
}
