import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['adoptions.component.scss']
})
export class AdoptionsComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'AdoptionsComponent message';
  }

  ngOnInit(): void {}
}
