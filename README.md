## Features
- Login with POST `/api/login`, token stored in cookies (`ngx-cookie-service`).
- Route protection for `/dashboard` and `/items` via `AuthGuard`.
- Token auto-attached via `AuthInterceptor`.
- Dashboard shows the user’s email and nav to list.
- Items list fetched from GET `/api/items`.
- State managed with `@ngrx/component-store` (loading + error).
- Lazy-loaded ItemsModule.
- Dev mock API implemented in-app.
- Angular Material for UI and a loading spinner.
- Sample unit tests for guard and service.

## Setup
```bash
npm i
ng serve