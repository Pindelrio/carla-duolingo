import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoGameComponent } from './games/photo-game/photo-game.component';
import { PhraseGameComponent } from './games/phrase-game/phrase-game.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { SortPhraseGameComponent } from './games/sort-phrase-game/sort-phrase-game.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    DashboardComponent,
    PhotoGameComponent,
    PhraseGameComponent,
    SortPhraseGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'photogame', component: PhotoGameComponent},
      { path: 'phrasegame', component: PhraseGameComponent},
      { path: 'sortphrasegame', component: SortPhraseGameComponent}
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
