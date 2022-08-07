import { ResponseErrorMessage, ResponseMessage } from "./Post.types"

export const POSTS_URL: string = process.env.REACT_APP_POSTS_URL || 'http://localhost:3000/api/v1/posts'

export const responseErrorMessage: ResponseErrorMessage = {
    error: 'An error happened when fetching data'
};

export const deletedMessage: ResponseMessage = {
    message: 'Post deleted successfully'
}