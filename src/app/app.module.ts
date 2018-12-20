import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

import * as fromCoreContainers from './core/containers';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: fromCoreContainers.LoginComponent },
  { path: 'register', component: fromCoreContainers.RegisterComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
