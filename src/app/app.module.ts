import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
