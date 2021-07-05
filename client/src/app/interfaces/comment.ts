import { IMovie } from "./movie";

export interface IComment {
    _id: string
    likes: string[],
    message: string,
    owner: string,
    movie: IMovie
    __v: number
}