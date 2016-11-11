import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    })
  ]
})
export class AppModule { }
