import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-mobiledrawer',
  standalone: true,
  imports: [
    NzDrawerModule,
    NzButtonModule,
    RouterModule
  ],
  templateUrl: './mobiledrawer.component.html',
  styleUrl: './mobiledrawer.component.css'
})
export class MobiledrawerComponent {



  @Input()   visible = false;
  @Output() closeDrawerEvent = new EventEmitter<void>();

  closeDrawer() {
    this.closeDrawerEvent.emit();
  }
  }