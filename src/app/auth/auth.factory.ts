import { HttpClient } from '@angular/common/http'

import { environment } from '../../environments/environment'
import { CustomAuthService } from './auth-custom.service'
import { AuthMode } from './auth.enum'
import { InMemoryAuthService } from './auth.inmemory.service'

//import { AngularFireAuth } from '@angular/fire/auth'

//import { FirebaseAuthService } from './auth.firebase.service'

export function authFactory(httpClient: HttpClient) {
  switch (environment.authMode) {
    case AuthMode.InMemory:
      return new InMemoryAuthService()
    case AuthMode.CustomServer:
      return new CustomAuthService(httpClient)
  }
}
