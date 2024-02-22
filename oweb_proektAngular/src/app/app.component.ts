import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ContactComponent } from './contact/contact.component';
import { Ponuda} from './modules/klasi';
import { PONUDA } from '../database';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { User } from './modules/klasi';
import { LOGIN } from '../database';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SearchbarComponent, ContactComponent, InfoComponent, LoginComponent, FormsModule, GalleryComponent, AboutusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oweb_proektAngular';
  ponuda=PONUDA;
  filteredPonuda1: Ponuda[];
  filteredPonuda2: Ponuda[];
  filteredPonuda3: Ponuda[];
  constructor() {
    this.filteredPonuda1 = this.ponuda.filter((item: Ponuda) => item.type === 'Велигденски патувања');
    this.filteredPonuda2 = this.ponuda.filter((item: Ponuda) => item.type === '8ми Март');
    this.filteredPonuda3 = this.ponuda.filter((item: Ponuda) => item.type === 'Лето 2024');
  }
  @Input()
  item:Ponuda = {} as Ponuda;
  @Output()
  fav = new EventEmitter<Ponuda>();
  addtofavorites(event: MouseEvent) {
    const image = event.target as HTMLImageElement;
    if (image.src.endsWith("/assets/favoriteoff.png")) {
      image.src = "../../assets/favorite.png";
    } else {
      image.src = "../../assets/favoriteoff.png";
    }
    this.fav.emit(this.item);
  }
  signupshow:boolean = false;
  signupshowfunction(){
    this.signupshow=!this.signupshow;
  }
  user:number = -1;
  Korisnici=LOGIN;
  trylogin(data: User) {
    let flag = false;
    for (const korisnik of this.Korisnici) {
      if (data.username === korisnik.username && data.password === korisnik.password) {
        this.user = korisnik.id;
        flag = true;
        break;
      }
    }
    if (flag) {
      window.alert("Најавата е успешна!");
      this.signupshow = false;
    } else {
      window.alert("Погрешно корисничко име или лозинка");
    }
  }
  }




