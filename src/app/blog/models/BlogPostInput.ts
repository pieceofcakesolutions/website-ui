import { BlogPostComment } from "./BlogPostComment";

export interface BlogPostInput {
    title: string;
    content: string;
    comments: BlogPostComment[];
    description: string;
};