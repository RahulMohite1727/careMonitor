import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item { id: number; name: string; description: string; }

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/items');
  }
}
