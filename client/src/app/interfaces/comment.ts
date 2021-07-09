import { IMovie } from "./movie";
import { IUser } from "./user";

export interface IComment {
    _id: string
    likes: string[],
    message: string,
    owner: IUser,
    movie: IMovie
    __v: number
}