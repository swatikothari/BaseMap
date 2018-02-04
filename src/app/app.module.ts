import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AgmCoreModule } from '@agm/core;
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BaseComponent } from './components/base-component/base.component';


const appRoutes: Routes =[
  {
    path:'user/:id',component:UserDetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
