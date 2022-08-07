export interface PostsData {
    id: number;
    title: string;
    content: string;
    lat: string;
    long: string;
    image_url: string
    created_at: string;
    updated_at: string;
}

export type PostPostsData = Omit<PostsData, "id" | "created_at" | "updated_at">

export type PutPostsData =  Partial<PostPostsData>

export interface ResponseErrorMessage {
    error: string;
}

export interface ResponseMessage {
    message: string;
}