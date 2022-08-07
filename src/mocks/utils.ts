import { mockedAllPosts } from "./constants";

export const getMockedPost = (id: number) => mockedAllPosts.find(p => p.id === id);