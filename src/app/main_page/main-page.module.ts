import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ContentComponent} from "./components/content/content.component";
import {FormComponent} from "./components/form/form.component";
import {SvgGraphComponent} from "./components/svg-graph/svg-graph.component";
import {FormsModule} from "@angular/forms";
import {MainPageRoutingModule} from "./main-page-routing.module";
import {MainPageComponent} from "./components/main-page/main-page.component";

@NgModule({
  declarations:[
    MainPageComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FormComponent,
    SvgGraphComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MainPageRoutingModule
  ],
  exports: [
    MainPageComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FormComponent,
    SvgGraphComponent
  ]
})
export class MainPageModule{

}
