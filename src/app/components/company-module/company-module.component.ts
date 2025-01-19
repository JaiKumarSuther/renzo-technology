import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-company-module',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, DashboardComponent],
  templateUrl: './company-module.component.html',
  styleUrl: './company-module.component.scss'
})
export class CompanyModuleComponent {

}
