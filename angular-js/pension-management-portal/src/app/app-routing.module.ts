import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component/home-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { ShowPensionComponent } from './components/show-pension/show-pension.component';
const routes: Routes = [
  {path:"", component:HomeComponentComponent},
  {path:"register", component:RegisterComponentComponent},
  {path:"showpension", component:ShowPensionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
