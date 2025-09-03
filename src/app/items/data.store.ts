import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ApiService, Item } from '../core/api.service';
import { switchMap, tap, catchError, of } from 'rxjs';

export interface ItemsState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

@Injectable()
export class ItemsStore extends ComponentStore<ItemsState> {

  readonly items$ = this.select(s => s.items);
  readonly loading$ = this.select(s => s.loading);
  readonly error$ = this.select(s => s.error);

  constructor(private api : ApiService) {
    super({ items: [], loading: false, error: null });
  }

  readonly load = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true, error: null })),
      switchMap(() =>
        this.api.getItems().pipe(
          tap(items => this.patchState({ items, loading: false })),
          catchError(err => {
            this.patchState({ error: err?.statusText || 'Failed to load', loading: false });
            return of();
          })
        )
      )
    )
  );
}
