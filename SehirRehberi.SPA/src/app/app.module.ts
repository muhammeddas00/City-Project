import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityAddComponent } from './city/city-add/city-add.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AlertifyService } from './services/alertify.service';


@NgModule({
  declarations: [				
    AppComponent,
      ValueComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent,
      CityAddComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
    
   

  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
