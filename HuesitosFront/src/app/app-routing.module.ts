import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UserComponent } from './components/user/user.component';

import { authGuard } from './guards/auth.guard';
import { SideboardComponent } from './shared/sideboard/sideboard.component';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { MarketComponent } from './components/market/market.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent,
   canActivate: [authGuard]
  },

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
    
  {path: 'sideboard', component: SideboardComponent,
   canActivate: [authGuard]
  },

  {path: 'users', component: UserComponent,
   canActivate: [authGuard]
  },

  {path: 'shifts', component: ShiftsComponent,
  canActivate: [authGuard]
},
  {path: 'market', component: MarketComponent,
  canActivate: [authGuard]},
  {path: 'contacts', component: ContactsComponent,
  canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
