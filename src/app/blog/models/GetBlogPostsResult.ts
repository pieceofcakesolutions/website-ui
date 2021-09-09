import { BlogPost } from "./BlogPost";
import { BlogPostComment } from "./BlogPostComment";

export interface GetBlogPostsResult {
    paginationToken: string,
    blogs: BlogPost[],
    resultsType: number,
};