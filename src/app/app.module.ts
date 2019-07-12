import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StrategyDrawerComponent } from './strategy-drawer/strategy-drawer.component';


const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'strategy', component: StrategyDrawerComponent},
];


@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent, StrategyDrawerComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
