/*
import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'AIERP'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('AIERP')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('.content span').textContent).toContain(
      'AIERP app is running!'
    )
  })
})
*/

import { TestBed, waitForAsync } from '@angular/core/testing'
import { MediaObserver } from '@angular/flex-layout'
import { MatIconRegistry } from '@angular/material/icon'
import { FakeMatIconRegistry } from '@angular/material/icon/testing'
import { DomSanitizer } from '@angular/platform-browser'
import {
  ObservablePropertyStrategy,
  autoSpyObj,
  createComponentMock,
  injectSpy,
} from 'angular-unit-test-helper'

import { AppComponent } from './app.component'
import { AuthService, defaultAuthStatus } from './auth/auth.service'
import {
  DomSanitizerFake,
  MediaObserverFake,
  commonTestingModules,
} from './common/common.testing'

describe('AppComponent', () => {
  let authServiceMock: jasmine.SpyObj<AuthService>
  beforeEach(
    waitForAsync(() => {
      const authServiceSpy = autoSpyObj(
        AuthService,
        ['authStatus$'],
        ObservablePropertyStrategy.BehaviorSubject
      )
      TestBed.configureTestingModule({
        imports: commonTestingModules,
        providers: [
          { provide: MediaObserver, useClass: MediaObserverFake },
          { provide: MatIconRegistry, useClass: FakeMatIconRegistry },
          { provide: DomSanitizer, useClass: DomSanitizerFake },
          { provide: AuthService, useValue: authServiceSpy },
        ],
        declarations: [AppComponent, createComponentMock('NavigationMenuComponent')],
      }).compileComponents()

      authServiceMock = injectSpy(AuthService)
      authServiceMock.authStatus$.next(defaultAuthStatus)
    })
  )

  it(
    'should create the app',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(AppComponent)
      const app = fixture.debugElement.componentInstance
      expect(app).toBeTruthy()
    })
  )

  it(
    'should render app-container',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(AppComponent)
      fixture.detectChanges()
      const compiled = fixture.debugElement.nativeElement
      expect(compiled.querySelector('.app-container')).toBeDefined()
    })
  )
})
