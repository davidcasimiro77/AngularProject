import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/classes/user';
import { LoginService } from 'src/app/shared/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // Atributos
  public user: User

  constructor(
    private loginService: LoginService,       // el servicio que devuelve el numero para el login de usuario ( falso login en este caso)
    private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    // acciones de destrucción
    //localStorage.removeItem('personalToken');
  }

  public submit(): void {
    this.loginService.login(this.user).subscribe(
      (data: number) => {
        localStorage.setItem('correo', this.user.correo);
        localStorage.setItem('personalToken', `${data}`);
        //window.location.reload();
        //this.router.navigate(['/list']);
        //this.router.navigate(["/list?refresh=1"]);
        this.router.navigate(['/list']).then(() => { window.location.reload(); });
      },
      (error: Error) => {
        console.error("Error al realizar el acceso- login");
      }
    )
  }
}