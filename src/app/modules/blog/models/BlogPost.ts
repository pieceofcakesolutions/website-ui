import { BlogPostComment } from "./BlogPostComment";

export interface BlogPost {
    title: string;
    content: string;
    comments: BlogPostComment[];
    summary: string;
    link?: string;
};