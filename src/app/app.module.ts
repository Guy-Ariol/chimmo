import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { AdminFormsComponent } from './components/admin-forms/admin-forms.component';
import { AdminGenericListingComponent } from './components/admin-generic-listing/admin-generic-listing.component';
import { BillComponent } from './components/bill/bill.component';
import { CashboxComponent } from './components/cashbox/cashbox.component';
import { DocComponent } from './components/doc/doc.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LanlordComponent } from './pages/lanlord/lanlord.component';
import { ReleaseComponent } from './pages/release/release.component';
import { RenterComponent } from './pages/renter/renter.component';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    AdminFormsComponent,
    AdminGenericListingComponent,
    BillComponent,
    CashboxComponent,
    DocComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    LanlordComponent,
    ReleaseComponent,
    RenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
