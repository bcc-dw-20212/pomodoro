/**
 * Observe que os reducers também seguem a mesma ideia apresentada na aula em que
 * fizemos os reducers do Pomodoro
 */

import { createReducer, on } from "@ngrx/store";
import { Person } from "../models";
import * as fromStarActions from "../store/starperson.actions";

export interface SWState {
    to_load: Number,
    person_loaded: Person,
    loaded: boolean,
}

export const initialState: SWState = {
    to_load: 0,
    person_loaded: new Person(),
    loaded: false,
}

export const starpersonReducer = createReducer(
    initialState,
    on(fromStarActions.loadPerson, (state, action) => ({
        ...state,
        to_load: action.id,
    })
    ),
    on(fromStarActions.personLoaded, (state, action) => ({
        ...state,
        person_loaded: action.person,
        loaded: true,
    })
    ),
);