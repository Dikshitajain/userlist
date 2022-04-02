import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: any = []
  selectedrole = '';
  selectedregion = '';
  role = ''
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getusers().subscribe((user) => {console.log(user); this.user = user});
  }

}
