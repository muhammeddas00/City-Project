import { CityComponent } from "./city/city.component";
import { ValueComponent } from "./value/value.component";
import { Routes } from "@angular/router";
import { CityDetailComponent } from "./city/city-detail/city-detail.component";
import { CityAddComponent } from "./city/city-add/city-add.component";
import { RegisterComponent } from "./register/register.component";

export const appRoutes: Routes= [
{path:"city",component:CityComponent},
{path:"value",component:ValueComponent},
{path:"cityDetail/:cityId",component:CityDetailComponent},
{path:"cityadd",component:CityAddComponent},
{path:"register",component:RegisterComponent},

{path:"**",redirectTo:"city",pathMatch:"full"} //Default olarak city açılır.


];
