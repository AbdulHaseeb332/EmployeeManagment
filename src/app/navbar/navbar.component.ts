import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { MobiledrawerComponent } from '../mobiledrawer/mobiledrawer.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,
    NzDrawerModule,
    NzButtonModule,
    MobiledrawerComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() openDrawerEvent = new EventEmitter<void>();


  visible = false;

  openDrawer() {
    this.visible = true;
  }

  closeDrawer() {
    this.visible = false;
  }

  }
