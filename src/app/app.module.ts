import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { BookstitchComponent } from './bookstitch/bookstitch.component';
import { KidsComponent } from './kids/kids.component';
import { BlouseComponent } from './blouse/blouse.component';
import { LehangaComponent } from './lehanga/lehanga.component';
import { FooterComponent } from './footer/footer.component';
import { SalwarComponent } from './salwar/salwar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { RecentComponent } from './recent/recent.component';
import { ReadComponent } from './read/read.component';
import { TextComponent } from './text/text.component';
import { FindComponent } from './find/find.component';
import { FaqComponent } from './faq/faq.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { ProductComponent } from './product/product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsofservicesComponent } from './termsofservices/termsofservices.component';
import { ProductreviewComponent } from './productreview/productreview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ScrollToTopComponent,
    BookstitchComponent,
    KidsComponent,
    BlouseComponent,
    LehangaComponent,
    FooterComponent,
    SalwarComponent,
    ContactusComponent,
    BlogComponent,
    RecentComponent,
    ReadComponent,
    TextComponent,
    FindComponent,
    FaqComponent,
    RegisterComponent,
    LoginComponent,
    CartitemComponent,
    ProductComponent,
    ViewproductComponent,
    CheckoutComponent,
    AboutusComponent,
    PrivacypolicyComponent,
    TermsofservicesComponent,
    ProductreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
