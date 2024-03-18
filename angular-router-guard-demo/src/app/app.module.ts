import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OffersComponent } from './components/offers/offers.component';
import { ProductsComponent } from './components/products/products.component';
import { DataService } from './services/data.service';
import { RoleGuard } from './services/role.guard';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccessDeniedComponent,
    AdminComponent,
    ContactComponent,
    EditAboutComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    OffersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService, RoleGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
