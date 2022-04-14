import { NgModule } from '@angular/core';

import { ActivitiesComponent } from 'src/activities/activities.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"
import {environment} from "../environments/environment"
import { ActivitiesService } from 'src/activities/activities.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ActivitiesComponent,
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  providers: [ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
