import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-dons',
  templateUrl: './dons.component.html',
  styleUrls: ['dons.component.scss']
})
export class DonsComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'DonsComponent message';
  }

  ngOnInit(): void {}
}
