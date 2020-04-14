import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductListComponent} from './products/product-list.component'
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //every browser application must import the browser module
  bootstrap: [AppComponent]
  //the startup component of the application
})
export class AppModule { }
