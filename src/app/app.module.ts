import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes =[	
  {path:'book' , component:BookComponent},
  {path:'view', component:ViewComponent},
  {path:'contact', component:ContactComponent},
  {path: 'home',component:HomeComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    BookComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
