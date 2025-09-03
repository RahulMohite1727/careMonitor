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
## Authentication
-Login with email and password using a mock API (/api/login)
-Stores authentication token in cookies (ngx-cookie-service)
-Protects dashboard and items routes with AuthGuard
-Logout clears cookies and redirects to login
## Dashboard
-Displays a welcome message with the logged-in user’s email
-Navigation link to the items list
-Logout button

## Items Module

-Fetches and displays a list of items from a mock API (/api/items)
-Uses Component Store for state management
-Handles loading and error states
-Includes a reusable app-loading-spinner for user feedback
## Technical

-Angular (latest recommended version)
-Angular Material for UI consistency
-RxJS best practices for API calls
-Feature-based modular architecture
-Lazy loading for ItemsModule
## structure
src/app/
├── auth/                # Login module, AuthGuard, AuthService
├── dashboard/           # Dashboard page
├── items/               # Items module with Component Store
├── shared/              # Shared components (e.g., loading spinner)
├── core/                # Core services (API, interceptors)
└── app-routing.module.ts
## API Endpoints (Mock)

-Login → POST /api/login
-Request: { email: string, password: string }
-Response: { token: string, user: { email: string } }
-Items → GET /api/items
-Response: [ { id: number, name: string, description: string } ]

## Login Credentials
    Email: test@example.com
    Password: password123
## Setup
```bash
## Clone the repository:
 git clone https://github.com/your-username/angular-auth-items-demo.git
cd angular-auth-items-demo
## Install dependencies:
npm install
## Run the development server
ng serve
##Open the application in the browser at:
http://localhost:4200


