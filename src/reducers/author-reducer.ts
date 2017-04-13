import { Types } from '../actions/action-types';
import { IAuthorAction } from '../actions/author-actions';
import { State, IState } from './initial-state';

export function authors(state = State.authors, action: IAuthorAction) {
    switch (action.type) {
        case Types.LOAD_AUTHORS_SUCCESS:
            return action.authors;

        default:
            return state;
    }
}