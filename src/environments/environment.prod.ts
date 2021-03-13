import { AuthMode } from 'src/app/auth/auth.enum'

export const environment = {
  production: true,
  authMode: AuthMode.InMemory,
  baseUrl: 'http://localhost:3000',
}
