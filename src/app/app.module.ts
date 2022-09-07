import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { MatNativeDateModule } from '@angular/material/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonComponent } from './person/person.component';
import { PersonModule } from './person/person.module';
import { HomeComponent } from './home/home.component';
import { PersonCanDeactivateGuard } from './service/persondata-deactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatTableModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonModule,
    MatNativeDateModule,
    //HttpClientInMemoryWebApiModule.forRoot(EmpDataService)
  ],
  providers: [PersonCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
