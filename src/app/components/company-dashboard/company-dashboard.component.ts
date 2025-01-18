import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-company-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './company-dashboard.component.html',
  styleUrl: './company-dashboard.component.scss'
})
export class CompanyDashboardComponent {

}
