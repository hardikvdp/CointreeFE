import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CointreesearchComponent } from './components/cointreesearch/cointreesearch.component';
import { CointreedataComponent } from './components/cointreedata/cointreedata.component';
import { NavComponent } from './components/nav/nav.component';

import { CointreeService } from './service/cointree.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CointreesearchComponent,
    CointreedataComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CointreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
