import * as React from 'react';
import { Action, ActionCreatorsMapObject, Dispatch } from 'redux';
import { Types } from './action-types';
import { IAuthor } from '../models/author';
import { AuthorApi } from '../api/mock-author';

export interface IAuthorAction extends Action {
    authors: IAuthor[]
}

export const AuthorActions: ActionCreatorsMapObject = {
    loadAuthorsSuccess
}

export function loadAuthorsSuccess(authors: IAuthor[]): IAuthorAction {
    return { type: Types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return (dispatch: Dispatch<any>) => {
        try {
            const authors = AuthorApi.getAllAuthors().then((_authors: IAuthor[]) => {
                dispatch(loadAuthorsSuccess(_authors));
            });

        } catch (error) {
            throw (error);
        }
    };
}