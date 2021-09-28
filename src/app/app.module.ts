import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import the GridModule for the Grid component
import { GridModule } from '@syncfusion/ej2-angular-grids';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTreeGridComponent } from './custom-tree-grid/custom-tree-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTreeGridComponent
  ],
  imports: [
    GridModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
