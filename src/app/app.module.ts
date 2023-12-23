import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterOutlet} from "@angular/router";
import {AuthModule} from "./account_manager/auth.module";
import {MainPageModule} from "./main_page/main-page.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./shared/auth/token.interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    AuthModule,
    MainPageModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
