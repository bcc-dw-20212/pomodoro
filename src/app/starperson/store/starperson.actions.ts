/** Criamos nossos actions normalmente quando queremos stores modulares.
 * 
 * E Store modular é o nosso caso pois os compomentes Starperson e Pomodoro são bem diferentes.
 */

import { createAction, props } from "@ngrx/store";
import { Person } from "../models";

export const LOAD_PERSON: string = '[STARPERSON] load person data.';
export const PERSON_LOADED: string = '[STARPERSON] person data loaded.';


export const loadPerson = createAction(LOAD_PERSON, props<{id: Number}>());
export const personLoaded = createAction(PERSON_LOADED, props<{person: Person}>());