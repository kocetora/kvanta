import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  error: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  submit(user: any) {
    this.authService.login(user).subscribe(
      (res: any) => {
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('username', res.username);
        // localStorage.setItem('role', res.role);
        localStorage.setItem('userid', res.userid.toString());
        this.snackBar.open('You successfully logged in!:)', 'Close', {
          duration: 5000,
          panelClass: 'success-snackbar',
        });
        this.router.navigate(['/profile']);
      },
      (err) => {
        this.error = err;
        this.snackBar.open('Wrong username or password', 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar',
        });
      }
    );
  }
}
