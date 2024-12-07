import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VLandingPageComponent } from './v-landing-page/v-landing-page.component';
import { VFormulariosComponent } from './v-formularios/v-formularios.component';
import { VEduconectaComponent } from './v-educonecta/v-educonecta.component';
import { CchatsComponent } from './v-educonecta/cchats/cchats.component'
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: VLandingPageComponent }, // Página principal (landing page)
  { path: 'login', component: VFormulariosComponent },
  { path: 'main', component: VEduconectaComponent },
  { path: 'educonecta', component: VEduconectaComponent, canActivate: [AuthGuard]},
  { path: 'chat', component: CchatsComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
