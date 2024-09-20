import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServService } from '../../service/user-serv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, CommonModule], // Ensure FormsModule is included here
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userId: number;
  myUser: any = { id: 0, name: '', age: null, track: '', email: '' };

  constructor(
    public service: UserServService,
    public activatedroute: ActivatedRoute,
    public router: Router
  ) {
    this.userId = +this.activatedroute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.userId !== 0) {
      this.myUser = this.service.getById(this.userId);
    }
  }

  onSubmit(myForm: any): void {
    if (myForm.valid) {
      if (this.userId === 0) {
        this.service.addUser(myForm.value);
        this.router.navigate(['/user']);
      } else {
        this.service.updateUser(this.userId, myForm.value);
        this.router.navigate(['/user']);
      }
    }
  }
}
