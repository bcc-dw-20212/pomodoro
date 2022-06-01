/** Criamos nossos actions normalmente quando queremos stores modulares.
 * 
 * E Store modular é o nosso caso pois os compomentes Starperson e Pomodoro são bem diferentes.
 */

import { createAction, createReducerFactory, props } from "@ngrx/store";
import { Person } from "../models";

export const LOAD_PERSON: string = '[STARPERSON] load person data.';
export const PERSON_LOADED: string = '[STARPERSON] person data loaded.';
export const LOAD_ERROR: string = '[STARPERSON] error on loading';
export const PLANET_LOADED: string = '[STARPERSON] planet loaded.';
export const FILME_LOADED: string = '[STARPERSON] filme loaded.';


export const loadPerson = createAction(LOAD_PERSON, props<{ id: Number }>());
export const personLoaded = createAction(PERSON_LOADED, props<{ person: Person }>());
export const errorloading = createAction(LOAD_ERROR);
export const planetLoading = createAction(PLANET_LOADED, props<{ name: string }>());
export const filmeLoading = createAction(FILME_LOADED, props<{names: string[]}>());