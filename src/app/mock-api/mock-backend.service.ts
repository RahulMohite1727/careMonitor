import { HttpBackend, HttpErrorResponse, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService implements HttpBackend {
  items = [
  { id: 1, name: 'Item 1', description: 'First item' },
  { id: 2, name: 'Item 2', description: 'Second item' },
  { id: 3, name: 'Item 3', description: 'Third item' },
  { id: 4, name: 'Item 4', description: 'Fourth item' },
  { id: 5, name: 'Item 5', description: 'Fifth item' },
  { id: 6, name: 'Item 6', description: 'Sixth item' },
  { id: 7, name: 'Item 7', description: 'Seventh item' },
  { id: 8, name: 'Item 8', description: 'Eighth item' },
  { id: 9, name: 'Item 9', description: 'Ninth item' },
  { id: 10, name: 'Item 10', description: 'Tenth item' },
  { id: 11, name: 'Item 11', description: 'Eleventh item' },
  { id: 12, name: 'Item 12', description: 'Twelfth item' },
  { id: 13, name: 'Item 13', description: 'Thirteenth item' },
  { id: 14, name: 'Item 14', description: 'Fourteenth item' },
  { id: 15, name: 'Item 15', description: 'Fifteenth item' },
  { id: 16, name: 'Item 16', description: 'Sixteenth item' },
  { id: 17, name: 'Item 17', description: 'Seventeenth item' },
  { id: 18, name: 'Item 18', description: 'Eighteenth item' },
  { id: 19, name: 'Item 19', description: 'Nineteenth item' },
  { id: 20, name: 'Item 20', description: 'Twentieth item' },
];

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const respond = <T>(body: T, status = 200) =>
      of(new HttpResponse({ status, body })).pipe(delay(600));
    const fail = (message: string, status = 401) =>
      throwError(() => new HttpErrorResponse({ status, statusText: message })).pipe(delay(300));

    if (req.url === '/api/login' && req.method === 'POST') {
      const { email } = req.body || {};
      return respond({ token: 'mock-jwt-token', user: { email: String(email || 'user@example.com') } });
    }

    if (req.url === '/api/items' && req.method === 'GET') {
      const auth = req.headers.get('Authorization') || '';
      if (!auth.startsWith('Bearer ')) return fail('Unauthorized');
      return respond(this.items);
    }

    // default 404
    return fail('Not Found', 404);
  }
}