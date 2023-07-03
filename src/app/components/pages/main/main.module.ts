import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TechStackComponent } from "../../tech-stack/tech-stack.component";

const routes = [{}];

@NgModule({
    declarations: [
      TechStackComponent],
    imports: [
        RouterModule.forRoot(routes),
      ],
    })
    
export class MainModule { }