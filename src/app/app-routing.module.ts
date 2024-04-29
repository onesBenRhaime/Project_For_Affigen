import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';

const routes: Routes = [
  {path:"", component:FrontLayoutComponent, children:[
       {path:"", loadChildren:()=>import("./views/front/home/home.module").then(m=>m.HomeModule)},   
       {path:"contact", loadChildren:()=>import("./views/front/contact/contact.module").then(m=>m.ContactModule)},
       {path:"about", loadChildren:()=>import("./views/front/about/about.module").then(m=>m.AboutModule)},
       {path:"products", loadChildren:()=>import("./views/front/products/products.module").then(m=>m.ProductsModule)},
       {path:"products/details", loadChildren:()=>import("./views/front/products/products.module").then(m=>m.ProductsModule)},
       {path:"categories", loadChildren:()=>import("./views/front/categorie/categorie.module").then(m=>m.CategorieModule)},
       {path:"service", loadChildren:()=>import("./views/front/service/service.module").then(m=>m.ServiceModule)},
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
