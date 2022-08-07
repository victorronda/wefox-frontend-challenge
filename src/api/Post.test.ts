import { mockedAllPosts, mockedNewPost, mockedUpdateNewPost } from "../mocks/constants";
import { addPost, deletePost, getAllPosts, getPost, updatePost } from "./Post";
import { server } from "../mocks/server";
import { rest } from "msw";
import { deletedMessage, responseErrorMessage } from "./constants";

describe("Post api calls", () => {
  it('should return a array of posts when we call successfully to "getAllPosts()"', async () => {
    const mockedResponse = await getAllPosts();
    expect(mockedResponse).toEqual(mockedAllPosts);
  });
  it('should return a error when we call unsuccessfully to "getAllPosts()"', async () => {
    server.resetHandlers(
      rest.get("http://localhost:3000/api/v1/posts", (req, res, ctx) => {
        return res(ctx.status(500), ctx.json(responseErrorMessage));
      })
    );
    const mockedResponse = await getAllPosts();
    expect(mockedResponse).toEqual(responseErrorMessage);
  });
  it('should return a array of posts when we call successfully to "getPost(id)"', async () => {
    const mockedResponse = await getPost(3);
    expect(mockedResponse).toEqual({
      id: 3,
      title: "Tokyo",
      content: "Tokyo blabla",
      lat: "30.48465",
      long: "-8.85521",
      image_url: "tokyo.jpg",
      created_at: "2022-06-20T12:09:47.924Z",
      updated_at: "2022-06-20T12:09:47.924Z",
    });
  });
  it('should return a error when we call unsuccessfully to "getPost(id)"', async () => {
    server.resetHandlers(
      rest.get("http://localhost:3000/api/v1/posts/:id", (req, res, ctx) => {
        return res(ctx.status(500), ctx.json(responseErrorMessage));
      })
    );
    const mockedResponse = await getPost(3);
    expect(mockedResponse).toEqual(responseErrorMessage);
  });
  it('should return a array of posts when we call successfully to "addPost(data)"', async () => {
    const mockedResponse = await addPost(mockedNewPost);
    expect(mockedResponse).toEqual(mockedNewPost);
  });
  it('should return a error when we call unsuccessfully to "addPost(data)"', async () => {
    server.resetHandlers(
      rest.post("http://localhost:3000/api/v1/posts", (req, res, ctx) => {
        return res(ctx.status(500), ctx.json(responseErrorMessage));
      })
    );
    const mockedResponse = await addPost(mockedNewPost);
    expect(mockedResponse).toEqual(responseErrorMessage);
  });
  it('should return a array of posts when we call successfully to "updatePost(id, data)"', async () => {
    const mockedResponse = await updatePost(2, mockedUpdateNewPost);
    expect(mockedResponse).toEqual(mockedUpdateNewPost);
  });
  it('should return a error when we call unsuccessfully to "updatePost(id, data)"', async () => {
    server.resetHandlers(
      rest.put("http://localhost:3000/api/v1/posts/:id", (req, res, ctx) => {
        return res(ctx.status(500), ctx.json(responseErrorMessage));
      })
    );
    const mockedResponse = await updatePost(2, mockedUpdateNewPost);
    expect(mockedResponse).toEqual(responseErrorMessage);
  });
  it('should return a array of posts when we call successfully to "deletePost(id)"', async () => {
    const mockedResponse = await deletePost(1);
    expect(mockedResponse).toEqual(deletedMessage);
  });
  it('should return a error when we call unsuccessfully to "deletePost(id)"', async () => {
    server.resetHandlers(
      rest.delete("http://localhost:3000/api/v1/posts/:id", (req, res, ctx) => {
        return res(ctx.status(500), ctx.json(responseErrorMessage));
      })
    );
    const mockedResponse = await deletePost(3);
    expect(mockedResponse).toEqual(responseErrorMessage);
  });
});
