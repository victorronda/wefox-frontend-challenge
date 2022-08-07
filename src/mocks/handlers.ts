import { rest } from 'msw';
import { mockedAllPosts,  mockedNewPost, mockedUpdateNewPost } from './constants';
import { getMockedPost } from './utils';

export const handlers = [
    rest.get('http://localhost:3000/api/v1/posts', (req, res, ctx)  => {
        return res(
            ctx.status(200),
            ctx.json(mockedAllPosts)
        )
    }),
    rest.get('http://localhost:3000/api/v1/posts/:id', (req, res, ctx)  => {
        const { id } = req.params;
        return res(
            ctx.status(200),
            ctx.json(getMockedPost(+id))
        )
    }),
    rest.post('http://localhost:3000/api/v1/posts', (req, res, ctx)  => {
        return res(
            ctx.status(201),
            ctx.json(mockedNewPost)
        )
    }),
    rest.put('http://localhost:3000/api/v1/posts/:id', (req, res, ctx)  => {
        return res(
            ctx.status(200),
            ctx.json(mockedUpdateNewPost)
        )
    }),
    rest.delete('http://localhost:3000/api/v1/posts/:id', (req, res, ctx)  => {
        return res(
            ctx.status(204),
            ctx.json({ message: 'Post deleted successfully'})
        )
    }),
]