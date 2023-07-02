import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "../../navigation/navigation.component";

const routes = [{}];

@NgModule({
    declarations: [NavigationComponent],
    imports: [
        RouterModule.forRoot(routes),
      ],
    })
    
export class MainModule { }