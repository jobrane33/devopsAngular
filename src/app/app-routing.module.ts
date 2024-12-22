import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsCrudComponent } from './students-crud/students-crud.component';
export const routes: Routes = [
    { path: '', component: StudentsCrudComponent }, // Default route
    { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route (optional)
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
  export class AppRoutingModule { }