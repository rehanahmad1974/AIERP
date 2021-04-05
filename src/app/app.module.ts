import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
// import { AngularFireModule } from '@angular/fire'
// import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthHttpInterceptor } from './auth/auth-http-interceptor'
import { authFactory } from './auth/auth.factory'
// import { InMemoryAuthService } from './auth/auth.inmemory.service'
import { AuthService } from './auth/auth.service'
import { SimpleDialogComponent } from './common/simple-dialog.component'
// import { SimpleDialogComponent } from './common/simple-dialog.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { MaterialModule } from './material.module'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
// import { NavigationMenuComponent } from './navigation-menu/navigation-menu/navigation-menu.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

// import { IConfig, NgxMaskModule } from 'ngx-mask'

// import { FieldErrorModule } from './user-controls/field-error/field-error.module'

/* export const options: Partial<IConfig> | (() => Partial<IConfig>) = {
  showMaskTyped: true,
} */

// Components should be mentioned in declarations array while modules should
// be mentioned in imports array
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SimpleDialogComponent,
    NavigationMenuComponent,
    LoginComponent,
    //    NavigationMenuComponent,
    //    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    /*     AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FieldErrorModule,
    NgxMaskModule.forRoot(options), */
    MaterialModule,
  ],
  providers: [
    // place here services which are used in throughout app
    {
      provide: AuthService,
      useFactory: authFactory,
      deps: [HttpClient],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [SimpleDialogComponent],
})
export class AppModule {}
