import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { environment } from '../../environments/environment';

import * as fromComponents from './components';

import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [Title],
})
export class CoreModule {}
