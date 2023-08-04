import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListfromComponent } from './listfrom/listfrom.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

const routes: Routes = [
  { path : '', component : ListfromComponent },
  { path : 'create' , component: ProfileEditorComponent },
  { path : 'edit/:formId', component : ProfileEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
