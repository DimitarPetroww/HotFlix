import { IComment } from "./comment";

export interface IMovie {
    _id: string
    likes: string[],
    name: string
    genre: string
    author: string
    description: string
    imageUrl: string
    trailerID: string,
    comments: IComment[],
    __v: number
}