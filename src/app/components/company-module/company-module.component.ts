import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-company-module',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './company-module.component.html',
  styleUrl: './company-module.component.scss'
})
export class CompanyModuleComponent {

}
