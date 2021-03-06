import {NgModule} from '@angular/core';
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatDatepickerModule,
	MatDialogModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule
} from '@angular/material';
import {
	CovalentCommonModule,
	CovalentDataTableModule,
	CovalentDialogsModule,
	CovalentExpansionPanelModule,
	CovalentLayoutModule,
	CovalentLoadingModule,
	CovalentMediaModule,
	CovalentMenuModule,
	CovalentMessageModule,
	CovalentNotificationsModule,
	CovalentPagingModule,
	CovalentSearchModule,
	CovalentStepsModule,
	CovalentFileModule
} from '@covalent/core';


@NgModule({
	imports: [
		/** Material Modules */
		MatDialogModule,
		MatButtonModule,
		MatListModule,
		MatIconModule,
		MatCardModule,
		MatMenuModule,
		MatInputModule,
		MatSelectModule,
		MatButtonToggleModule,
		MatSlideToggleModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatSnackBarModule,
		MatToolbarModule,
		MatTabsModule,
		MatSidenavModule,
		MatTooltipModule,
		MatRippleModule,
		MatRadioModule,
		MatGridListModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSliderModule,
		MatAutocompleteModule,
		MatTableModule,
		/** Covalent Modules */
		CovalentCommonModule,
		CovalentLayoutModule,
		CovalentMediaModule,
		CovalentExpansionPanelModule,
		CovalentStepsModule,
		CovalentDialogsModule,
		CovalentLoadingModule,
		CovalentSearchModule,
		CovalentPagingModule,
		CovalentNotificationsModule,
		CovalentMenuModule,
		CovalentDataTableModule,
		CovalentMessageModule,
		CovalentFileModule
	],
	exports: [
		/** Material Modules */
		MatDialogModule,
		MatButtonModule,
		MatListModule,
		MatIconModule,
		MatCardModule,
		MatMenuModule,
		MatInputModule,
		MatSelectModule,
		MatButtonToggleModule,
		MatSlideToggleModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatSnackBarModule,
		MatToolbarModule,
		MatTabsModule,
		MatSidenavModule,
		MatTooltipModule,
		MatRippleModule,
		MatRadioModule,
		MatGridListModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSliderModule,
		MatAutocompleteModule,
		MatTableModule,
		/** Covalent Modules */
		CovalentCommonModule,
		CovalentLayoutModule,
		CovalentMediaModule,
		CovalentExpansionPanelModule,
		CovalentStepsModule,
		CovalentDialogsModule,
		CovalentLoadingModule,
		CovalentSearchModule,
		CovalentPagingModule,
		CovalentNotificationsModule,
		CovalentMenuModule,
		CovalentDataTableModule,
		CovalentMessageModule,
		CovalentFileModule
	]
})
export class AngularMaterialModule {
}
