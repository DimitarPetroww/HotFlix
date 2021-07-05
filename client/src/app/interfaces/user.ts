import { IMovie } from "./movie";

export interface IUser {
    _id: string
    email: string,
    username: string,
    hashedPassword: string,
    likedMovie: IMovie[],
    ownerMovies: IMovie[]
    __v: number
}