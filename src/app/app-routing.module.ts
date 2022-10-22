import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { BlouseComponent } from './blouse/blouse.component';
import { BookstitchComponent } from './bookstitch/bookstitch.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LehangaComponent } from './lehanga/lehanga.component';
import { LoginComponent } from './login/login.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ProductComponent } from './product/product.component';
import { ProductreviewComponent } from './productreview/productreview.component';
import { ReadComponent } from './read/read.component';
import { RecentComponent } from './recent/recent.component';
import { RegisterComponent } from './register/register.component';
import { SalwarComponent } from './salwar/salwar.component';
import { TermsofservicesComponent } from './termsofservices/termsofservices.component';
import { TextComponent } from './text/text.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path: 'book',component:BookstitchComponent},
  {path:'kids',component:KidsComponent},
  {path:'blouse',component:BlouseComponent},
  {path:'lehanga',component:LehangaComponent},
  {path:'salwar',component:SalwarComponent},
  {path:'contact',component:ContactusComponent},
  {path:'blog',component:BlogComponent},
  {path:'faq',component:FaqComponent},
  {path:'read',component:ReadComponent},
  {path:'text',component:TextComponent},
  {path:'recent',component:RecentComponent},
  {path:'find',component:FindComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'bookstitch',component:ProductComponent},
  {path:'order',component:CartitemComponent},
  {path:'viewProduct/:id',component:ViewproductComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'about',component:AboutusComponent},
  {path:'privacy',component:PrivacypolicyComponent},
  {path:'terms',component:TermsofservicesComponent},
  {path:'review',component:ProductreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
