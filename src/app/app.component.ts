import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

// import { LoginService } from 'src/app/_services/login/login.service';

import { first } from 'rxjs';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular2apk';

  constructor(
    private router: Router,
    // private loginService: LoginService
  ) { }

  username: string = '';
  password: string = '';
  errorMsg: string = '';
  pwdFormat: string = 'password';
  pwdVisibility: string = 'visibility_off';

  loginToCRM() {
  //  
  alert('submitted!!')
  }

  hideShowPassword() {
    this.pwdFormat = this.pwdFormat == 'password' ? 'text' : 'password';
    this.pwdVisibility = this.pwdVisibility == 'visibility_off' ? 'visibility' : 'visibility_off';
  }

  callForgetPwdPage() {
    this.router.navigate(['/forgotpassword']);
  }
}
