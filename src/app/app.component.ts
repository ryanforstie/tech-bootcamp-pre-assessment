import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pre-assessment';
  addTotal: number;
  subTotal: number;
  num1: number;
  num2: number;
  num3: number;
  num4: number;

  getNum1(val: string) {
    this.num1 = parseInt(val);    
  }

  getNum2(val: string) {    
    this.num2 = parseInt(val);
  }

  
  getNum3(val: string) {
    this.num3 = parseInt(val);    
  }

  getNum4(val: string) {    
    this.num4 = parseInt(val);
  }

  add() {;
    this.addTotal = this.num1 + this.num2;
  }

  subtract() {
    this.subTotal = this.num3 - this.num4;
  }
}
