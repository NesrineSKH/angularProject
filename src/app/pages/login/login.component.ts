import { Component, OnInit } from '@angular/core';
import { LoginService} from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  checked = false;
  user= {
    username:"",
    password:""
  }
  constructor( private log:LoginService) { }

  ngOnInit(): void {

  }
// fonction eli ki chtenzel al bouton chtetaada w tekhou les donnees
  loginUser()
  {
    this.log.loginUser(this.user).subscribe
 (
 res=>console.log(res),
 err=>console.log(err)
   )
 // console.log("username", this.user.username)
  //console.log("password", this.user.password)
  }
  

}
