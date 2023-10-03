import { Component, inject } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";

@Component({
	selector: "home",
	template: `
		<mat-form-field class="w-full">
			<mat-label>Add or search item</mat-label>
			<input
				matInput
				type="text" />
			<button
				matSuffix
				mat-icon-button
				aria-label="Add item"
				color="primary">
				<mat-icon>add</mat-icon>
			</button>
		</mat-form-field>
	`
})
export class HomePage {
	private firestore: Firestore = inject(Firestore);
}
