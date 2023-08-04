import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import{HttpClientModule} from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddformComponent } from './addform/addform.component';
import { ListfromComponent } from './listfrom/listfrom.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    AddformComponent,
    ListfromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    PanelModule,
    AccordionModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
