import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home' , component:HomeComponent, title:'Home page'},
    {path:'about', component:AboutComponent, title:'About page'},
    {path:'contact', component:ContactComponent, title:'Contact page'},
    {path:'portfolio',component:PortfolioComponent, title:'Portfolio page'},
    {path:'**',component:NotfoundComponent , title:'NotFound page' },
];
