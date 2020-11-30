import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { UsersService } from "../../../../shared/services/users/users.service"
import { UserApi } from "../../../../shared/models/users/usersapi";
import { StorageService } from "../../../../shared/services/storage/storage.service";

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  
  user = {
		emailId: "asti",
		loginPassword: "asti123"
	};
  
  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              private usersService: UsersService,
              private storageService: StorageService
          
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  send() {

      var mydata = new UserApi;
       
      mydata.username = this.user.emailId;
      mydata.password = this.user.loginPassword;
  
      console.log("my user: "+ mydata.username)
      console.log("my pasword: "+ mydata.password)
       
      return this.usersService.postUsers(mydata)
       .subscribe((data: any) => {

        console.log("post users: " + data.accessToken );
        this.storageService.setLocal("token", data.accessToken);

        this.router.navigate(['/']);
        this.snackbar.open('Lucky you! Looks like you didn\'t need a password or email address! For a real application we provide validators to prevent this. ;)', 'LOL THANKS', {
          duration: 10000
        });
      
      }) 
      

  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
