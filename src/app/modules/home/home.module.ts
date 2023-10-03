import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { HomePage } from "./home.page";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { Router, RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [{ path: "", component: HomePage }];

@NgModule({
	declarations: [HomePage],
	imports: [CommonModule, RouterModule.forChild(routes), MatFormFieldModule, MatInputModule, MatIconModule, MatAutocompleteModule, MatButtonModule]
})
export class HomeModule {}
