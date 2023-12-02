import {Routes} from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {AppComponent} from "./app.component";
import {ContentComponent} from "./main_page/components/content/content.component";
import {MainPageComponent} from "./main_page/components/main-page/main-page.component";
import {authGuard} from "./account_manager/auth.guard";

export const routes: Routes = [
  {path: "", component: WelcomePageComponent},
  {
    path: "main", component: MainPageComponent,
    canActivate: [authGuard],
  }
];
