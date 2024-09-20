import { Component } from '@angular/core';
import { UserServService } from '../../service/user-serv.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users:any;

  constructor(  public service: UserServService) {
  }

  ngOnInit(): void {
    this.users = this.service.getAllUsers();
  }

  deleteUser(id: number) {
    this.service.deleteUser(id);
    this.users = this.service.getAllUsers();
  }

}
