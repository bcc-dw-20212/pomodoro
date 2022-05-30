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
    error: boolean,
    planet: string,
}

export const initialState: SWState = {
    to_load: 0,
    person_loaded: new Person(),
    loaded: false,
    error: false,
    planet: "",
}

// Note que aqui não temos como injetar os serviços.

export const starpersonReducer = createReducer(
    initialState,
    on(fromStarActions.loadPerson, (state, action) => ({
        ...state,
        to_load: action.id,
        loaded: false,
    })
    ),
    on(fromStarActions.personLoaded, (state, action) => ({
        ...state,
        person_loaded: action.person,
        loaded: true,
        error: false,
    })
    ),
    on(fromStarActions.errorloading, (state) => ({
        ...state,
        error: true,
        person_loaded: new Person(),
    })),
    on(fromStarActions.planetLoading, (state, action) => (
        {
            ...state,
            planet: action.name,
        }
    ))
);