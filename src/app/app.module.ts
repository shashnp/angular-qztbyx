import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hello' },
  { path: 'strategy', loadChildren: 'app/strategy-drawer/strategy.module#StrategyModule' },
];


@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
