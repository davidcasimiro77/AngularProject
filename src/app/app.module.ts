import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './views/list/list.component';
import { EntreeComponent } from './views/list/entree/entree.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutUsComponent } from './views/about-us/about-us.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { ContactComponent } from './views/contact/contact.component';
import { AreaPersonalComponent } from './views/area-personal/area-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    EntreeComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    LoginComponent,
    ContactComponent,
    AreaPersonalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
