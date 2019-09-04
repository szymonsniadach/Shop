import { Component, OnInit } from '@angular/core';
import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userIcon = faUser;
  public cartIcon = faShoppingCart;

  constructor() { }

  ngOnInit() {
  }

}
