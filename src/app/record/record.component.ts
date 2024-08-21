import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [RouterModule,NzTableModule],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {

}
