import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SqrtPipe }  from './custom-pipe';
import { ServiceTestService } from './service-test.service';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    HeaderComponent,
    CounterComponent,
    UserFormComponent,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ServiceTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
