import { IMovie } from "./movie";

export interface IUser {
    _id: string
    email: string,
    username: string,
    hashedPassword: string,
    likedMovies: IMovie[],
    ownedMovies: IMovie[]
    __v: number
}