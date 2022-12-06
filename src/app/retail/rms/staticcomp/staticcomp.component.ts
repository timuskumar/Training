import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staticcomp',
  templateUrl: './staticcomp.component.html',
  styleUrls: ['./staticcomp.component.scss']
})
export class StaticcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayForm(data: any) {
    console.log(data)
  }

}
