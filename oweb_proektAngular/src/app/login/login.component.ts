import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../modules/klasi';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl:'./login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usr:string='Evgenija';
  pass:string='123';
  @Output()
  login = new EventEmitter<User>();

  loginfunction() {
    const korisnik:User = {} as User;
    korisnik.username=this.usr;
    korisnik.password=this.pass;
    this.login.emit(korisnik);
  }
}
