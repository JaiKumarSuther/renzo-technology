import { Component } from '@angular/core';
import { PadNumberPipe } from '../../../../pipes/pad-number/pad-number.pipe';

@Component({
  selector: 'app-job-data',
  standalone: true,
  imports: [PadNumberPipe],
  templateUrl: './job-data.component.html',
  styleUrl: './job-data.component.scss'
})
export class JobDataComponent {
  jobs = [
    { title: 'Active Jobs', count: 15 },
    { title: 'Expired Jobs', count: 5 },
    { title: 'Received Applications', count: 156 },
    { title: 'Shortlisted Applications', count: 3 },
  ];
}
