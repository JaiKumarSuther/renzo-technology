import { Component } from '@angular/core';
import { JobDataComponent } from "./job-data/job-data.component";
import { ApplicationsComponent } from "./applications/applications.component";
import { JobsComponent } from "./jobs/jobs.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JobDataComponent, ApplicationsComponent, JobsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
