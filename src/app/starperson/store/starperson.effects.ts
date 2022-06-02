import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducers';
import { IfceserviceService } from '../../ifceservice.service';
import { Movie } from '../models';
import * as fromStarpersonActions from './starperson.actions';

@Injectable()
export class StarpersonEffects {

    loadPerson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromStarpersonActions.LOAD_PERSON),
            mergeMap(() => this.service.getPersonagem()
                .pipe(
                    map(person => ({ type: fromStarpersonActions.PERSON_LOADED, person: person })),
                    catchError(() => of({ type: fromStarpersonActions.LOAD_ERROR }))
                )
            )
        )
    );

    loadPlanet$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromStarpersonActions.PERSON_LOADED),
            mergeMap(() => this.service.getNomePlaneta()
                .pipe(
                    map(planet => ({ type: fromStarpersonActions.PLANET_LOADED, name: planet.name })),
                    catchError(() => of({ type: fromStarpersonActions.LOAD_ERROR }))
                )
            )
        )
    )

    loadMovies$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromStarpersonActions.PERSON_LOADED),
                concatLatestFrom(action => this.store.select((state: AppState) => state.starperson.person_loaded.films)),
                tap(([action, films]) => {
                    for (let film of films) {
                        this.service.getNomeFilme(film).subscribe(
                            (movie: Movie) => this.store.dispatch(fromStarpersonActions.filmeLoading({ name: movie.title })),
                        );
                    }
                }
                )),
        { dispatch: false },
    );



    constructor(
        private actions$: Actions,
        private service: IfceserviceService,
        private store: Store<AppState>,
    ) { }
}