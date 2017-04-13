import { IAuthor } from '../models/author';
import {ICourse} from '../models/course';

export interface IState {
    authors: IAuthor[],
    courses: ICourse[]
}

export const State: IState = {
    authors: [],
    courses: []
}