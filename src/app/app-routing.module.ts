import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateIssueComponent } from './create-issue/create-issue.component';
import { ListOfIssuesComponent } from './list-of-issues/list-of-issues.component';


const routes: Routes = [
  {path:'',redirectTo:'listOfIssue',pathMatch:'full'},

  {path:'createIssue',component:CreateIssueComponent},
  {path:'listOfIssue',component:ListOfIssuesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
