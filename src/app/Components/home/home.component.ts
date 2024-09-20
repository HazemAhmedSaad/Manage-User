import { Component } from '@angular/core';
import { UserServService } from '../../service/user-serv.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userName: string = '';
  constructor(public service: UserServService) {
    this.userName = service.users[0].name;
  }
}
