import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  form: any = FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', {validators: [Validators.required] }),
      email: new FormControl('', {validators: [Validators.required]}),
      role: new FormControl('', {validators: [Validators.required]}),
      region: new FormControl('', {validators: [Validators.required]})
    });
  }

  onuserSubmit(){
    console.log(this.form.value)
    this.userService.addusers(this.form.value).subscribe(res=>{
      console.log('success');
      this.form.reset()
    })
  }

}
