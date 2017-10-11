import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/shared/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CallComponent } from './call/call.component';
import { PriceService } from './services/price.service';
import { OperatorComponent } from './operator/operator.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CallComponent,
    OperatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component : HomeComponent
      },
      {
        path:'home',
        component : CallComponent
      },
      {
        path:'operator',
        component : OperatorComponent
      }
    ])
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
