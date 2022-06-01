import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createEffects } from '@ngrx/effects/src/effects_module';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducers';
import { IfceserviceService } from '../../ifceservice.service';
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

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromStarpersonActions.PERSON_LOADED),
            mergeMap(() => this.service.getNomeFilme()
                .pipe(
                    map(filme => {
                            console.log(filme);
                            return { type: fromStarpersonActions.FILME_LOADED, names: filme }
                        }
                    ),
                    catchError(() => of({ type: fromStarpersonActions.LOAD_ERROR }))
                )
            )
        )
    )



    constructor(
        private actions$: Actions,
        private service: IfceserviceService,
    ) { }
}