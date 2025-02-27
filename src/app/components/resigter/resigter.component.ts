import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first, last } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-resigter',
  templateUrl: './resigter.component.html',
  styleUrls: ['./resigter.component.css']
})
export class ResigterComponent {
  constructor
  (private service: UserService) { }
regidterUser() {
throw new Error('Method not implemented.');
}

  user = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    role:new FormControl()
  })
  regidteUser(){
    console.log(this.user.value)
    this.service.registerUser(this.user.value).subscribe((response: any) => {

      console.log(response);

    })

}
}

