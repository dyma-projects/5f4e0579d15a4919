import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public text: string = "texte exercice 1";
  public textStyle: string = "color : green;";

  constructor() { }

  ngOnInit(): void {
  }

  public textClic(): void {
    console.log("text click ok");
  }

}
