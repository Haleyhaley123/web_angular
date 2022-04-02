import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DataListAddComponent } from './addmin/dataList/data-list-add/data-list-add.component';
import { DataListEditComponent } from './addmin/dataList/data-list-edit/data-list-edit.component';
import { DataListListComponent } from './addmin/dataList/data-list-list/data-list-list.component';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', children:[
    {path: '', component: DataListListComponent},
    {path: 'list', component: DataListListComponent},
    {path: 'edit', component: DataListEditComponent},
    {path: 'add', component:  DataListAddComponent},

  ]},
  {path: 'about', component: AboutComponent},
  {path: 'register-form', component: RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
