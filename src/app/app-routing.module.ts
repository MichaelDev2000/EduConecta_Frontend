import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VLandingPageComponent } from './v-landing-page/v-landing-page.component';
import { VFormulariosComponent } from './v-formularios/v-formularios.component';
import { VEduconectaComponent } from './v-educonecta/v-educonecta.component';
import { CchatsComponent } from './v-educonecta/cchats/cchats.component'
import { AuthGuard } from './guards/auth.guard';
import { CperfilComponent } from './v-educonecta/cperfil/cperfil.component';
import { CgruposComponent } from './v-educonecta/cgrupos/cgrupos.component'; import { CeditarPerfilComponent } from './v-educonecta/ceditar-perfil/ceditar-perfil.component';
import { CusuarioComponent } from './v-educonecta/cusuario/cusuario.component';

const routes: Routes = [
  { path: '', component: VLandingPageComponent }, 
  { path: 'login', component: VFormulariosComponent },
  { path: 'main', component: VEduconectaComponent, canActivate: [AuthGuard] },
  { path: 'educonecta', component: VEduconectaComponent, canActivate: [AuthGuard] },
  { path: 'educonecta/chats', component: CchatsComponent, canActivate: [AuthGuard] },
  { path: 'educonecta/chat/:id', component: CchatsComponent, canActivate: [AuthGuard] },
  { path: 'educonecta/perfil', component: CperfilComponent, canActivate: [AuthGuard] },
  { path: 'educonecta/grupos', component: CgruposComponent, canActivate: [AuthGuard] },
  { path: 'educonecta/editarPerfil', component: CeditarPerfilComponent, canActivate: [AuthGuard] },
  { path: 'educonecta/usuario/:id', component: CusuarioComponent, canActivate: [AuthGuard] }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
