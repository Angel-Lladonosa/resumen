import { Component, OnInit } from '@angular/core';

interface MenuItem {
  url:string;
  label:string;
  icon?:string;
}

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show: boolean;
  menu: Array<MenuItem>;

  constructor() {
    this.show = false;
    this.menu = [
      {
        label: 'about',
        url: 'about'
      },
      {
        label: 'education',
        url: 'education'
      },
      {
        label: 'contact',
        url: 'contact'
      },
      {
        label: 'skills',
        url: 'skills'
      }
    ];
  }

  ngOnInit(): void {
  }

}
