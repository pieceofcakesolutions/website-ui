import { BlogPostComment } from "./BlogPostComment";

export interface BlogPost {
    id?: string;
    title: string;
    subtitle: string;
    content: string;
    description: string;
    createdBy: string;
    created: Date;
    modified: Date;
    modifiedBy: Date;
};