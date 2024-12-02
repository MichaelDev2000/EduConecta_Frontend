import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheaderComponent } from './v-landing-page/cheader/cheader.component';
import { CfooterComponent } from './v-landing-page/cfooter/cfooter.component';
import { CSectionEquipoComponent } from './v-landing-page/c-section-equipo/c-section-equipo.component';
import { CSectionPropositoComponent } from './v-landing-page/c-section-proposito/c-section-proposito.component';
import { CSectionPorqueComponent } from './v-landing-page/c-section-porque/c-section-porque.component';
import { CSectionSomosComponent } from './v-landing-page/c-section-somos/c-section-somos.component';
import { VLandingPageComponent } from './v-landing-page/v-landing-page.component';
import { CSectionMainComponent } from './v-landing-page/c-section-main/c-section-main.component';
import { VFormulariosComponent } from './v-formularios/v-formularios.component';
import { CheaderFormComponent } from './v-formularios/cheader-form/cheader-form.component';
import { FormAuthComponent } from './v-formularios/form-auth/form-auth.component';
import { VEduconectaComponent } from './v-educonecta/v-educonecta.component';


@NgModule({
  declarations: [
    AppComponent,
    CheaderComponent,
    CfooterComponent,
    CSectionEquipoComponent,
    CSectionPropositoComponent,
    CSectionPorqueComponent,
    CSectionSomosComponent,
    CSectionMainComponent,
    VFormulariosComponent,
    CheaderFormComponent,
    VLandingPageComponent,
    FormAuthComponent,
    VEduconectaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
