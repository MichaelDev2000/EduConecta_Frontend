import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';



import { FormsModule } from '@angular/forms';// este lo agrego yo yiyo para que funcione la opcion de publicar publicaicon//
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
import { CvistamainComponent } from './v-educonecta/cvistamain/cvistamain.component';
import { FeedComponent } from './v-educonecta/cvistamain/feed/feed.component';
import { GruposComponent } from './v-educonecta/cvistamain/grupos/grupos.component';
import { AmistadesComponent } from './v-educonecta/cvistamain/amistades/amistades.component';
import { CheadermainComponent } from './v-educonecta/cheadermain/cheadermain.component';
import { CSectionHacemosComponent } from './v-landing-page/c-section-hacemos/c-section-hacemos.component';
import { CperfilComponent } from './v-educonecta/cperfil/cperfil.component';
import { CeditarPerfilComponent } from './v-educonecta/ceditar-perfil/ceditar-perfil.component';
import { CchatsComponent } from './v-educonecta/cchats/cchats.component';
import { CchatIAComponent } from './v-educonecta/cchat-ia/cchat-ia.component';
import { CusuarioComponent } from './v-educonecta/cusuario/cusuario.component';
import { environment } from '../environments/environment';
import { CgruposComponent } from './v-educonecta/cgrupos/cgrupos.component';




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
    CvistamainComponent,
    FeedComponent,
    GruposComponent,
    AmistadesComponent,
    CheadermainComponent,
    CSectionHacemosComponent,
    CperfilComponent,
    CeditarPerfilComponent,
    CchatsComponent,
    CchatIAComponent,
    CgruposComponent,
    CusuarioComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
