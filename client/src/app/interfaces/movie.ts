import { IComment } from "./comment";

export interface IMovie {
    _id: string
    likes: string[],
    name: string
    genres: string[]
    actors: string[]
    description: string
    imageUrl: string
    trailerID: string,
    comments: IComment[],
    __v: number
}