import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
list=[
{name:"login", path:"login"},{name:"home", path:"home"},
{name:"about", path:"about"},
{name:"contact", path:"contact"},{name:"services", path:"services"},{name:"booking", path:"booking"}]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
}
