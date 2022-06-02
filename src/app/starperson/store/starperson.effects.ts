import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducers';
import { IfceserviceService } from '../../ifceservice.service';
import { Movie, Specie, Starship, Vehicle } from '../models';
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

    loadEspecies$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromStarpersonActions.PERSON_LOADED),
                concatLatestFrom(action => this.store.select((state: AppState) => state.starperson.person_loaded.species)),
                tap(([action, especies]) => {
                    for (let especie of especies) {
                        this.service.getNomeEspecie(especie).subscribe(
                            (especie: Specie) => this.store.dispatch(fromStarpersonActions.especieLoading({ name: especie.name })),
                        )
                    }
                }
                )
            ),
        { dispatch: false }
    );

    loadVeiculo$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromStarpersonActions.PERSON_LOADED),
                concatLatestFrom(action => this.store.select((state: AppState) => state.starperson.person_loaded.vehicles)),
                tap(([action, veiculos]) => {
                    for (let veiculo of veiculos) {
                        this.service.getNomeVeiculo(veiculo).subscribe(
                            (veiculo: Vehicle) => this.store.dispatch(fromStarpersonActions.veiculoLoading({ name: veiculo.name })),
                        )
                    }
                }
                )
            ),
        { dispatch: false }
    )

    loadNaves$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromStarpersonActions.PERSON_LOADED),
                concatLatestFrom((action) => this.store.select((state: AppState) => state.starperson.person_loaded.starships)),
                tap(([action, naves]) => {
                    for (let nave of naves) {
                        this.service.getNomeNave(nave).subscribe(
                            (nave: Starship) => this.store.dispatch(fromStarpersonActions.naveLoading({ name: nave.name })),
                        )
                    }
                })
            ),
        { dispatch: false }
    )



    constructor(
        private actions$: Actions,
        private service: IfceserviceService,
        private store: Store<AppState>,
    ) { }
}