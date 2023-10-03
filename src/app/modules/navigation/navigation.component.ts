import { Component } from "@angular/core";

@Component({
	selector: "navigation",
	template: `<mat-toolbar
		><button
			mat-icon-button
			aria-label="Menu">
			<mat-icon>menu</mat-icon></button
		>Grocery list app</mat-toolbar
	>`
})
export class NavigationComponent {}
