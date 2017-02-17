import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './accounts.component';
import { AccountsNewComponent } from './accounts-new.component';
import { AccountsViewComponent } from './accounts-view.component';
import { AccountsEditComponent } from './accounts-edit.component';

const appRoutes: Routes = [
  {path: 'accounts', component: AccountsComponent},
  {path: 'accounts/new', component: AccountsNewComponent},
  {path: 'accounts/:id', component: AccountsViewComponent},
  {path: 'accounts/:id/edit', component: AccountsEditComponent},
];

@NgModule({
  imports:[
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AccountsComponent,
    AccountsNewComponent,
    AccountsEditComponent,
    AccountsViewComponent,
  ],
  providers:[]
})

export class AccountsModule{

}
