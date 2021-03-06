import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { 
	IgxGridModule,
	IgxButtonGroupModule,
	IgxIconModule,
	IgxSliderModule,
	IgxToggleModule,
	IgxButtonModule,
	IgxExcelExporterService,
	IgxCsvExporterService,
	IgxSwitchModule,
	IgxRippleModule,
	IgxDialogModule
 } from "igniteui-angular";
import { FinJSDemoComponent } from "./grid-finjs/grid-finjs-demo.component";
import { LocalDataService } from "./grid-finjs/localData.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		FinJSDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxGridModule,
		IgxButtonGroupModule,
		IgxIconModule,
		IgxSliderModule,
		IgxToggleModule,
		IgxButtonModule,
		IgxSwitchModule,
		IgxRippleModule,
		IgxCategoryChartModule,
		IgxDialogModule
  ],
  providers: [
		LocalDataService,
		IgxExcelExporterService,
		IgxCsvExporterService
	],
  entryComponents: []
})
export class AppModule {}
