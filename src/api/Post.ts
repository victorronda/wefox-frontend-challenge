import {
  PostPostsData,
  PostsData,
  PutPostsData,
  ResponseErrorMessage,
  ResponseMessage,
} from "./Post.types";
import { deletedMessage, POSTS_URL, responseErrorMessage } from "./constants";

export async function getAllPosts(): Promise<
  PostsData[] | ResponseErrorMessage
> {
  const response = await fetch(POSTS_URL);
  if (!response.ok) {
    return responseErrorMessage;
  }
  return response.json();
}

export async function getPost(
  id?: number
): Promise<PostsData | ResponseErrorMessage> {
  const response = await fetch(`${POSTS_URL}/${id}`);
  if (!response.ok) {
    return responseErrorMessage;
  }
  return response.json();
}

export async function addPost(
  data: PostPostsData
): Promise<PostsData | ResponseErrorMessage> {
  const response = await fetch(POSTS_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    return responseErrorMessage;
  }
  return response.json();
}

export async function updatePost(
  id: number,
  data: PutPostsData
): Promise<PostsData | ResponseErrorMessage> {
  const response = await fetch(`${POSTS_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    return responseErrorMessage;
  }
  return response.json();
}

export async function deletePost(
  id: number
): Promise<ResponseMessage | ResponseErrorMessage> {
  const response = await fetch(`${POSTS_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    return responseErrorMessage;
  }
  return deletedMessage;
}
