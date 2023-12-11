import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {authGuard} from "../shared/auth/auth.guard";




const routes: Routes = [
  {path: "main", component: MainPageComponent, canActivate: [authGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule{

}
