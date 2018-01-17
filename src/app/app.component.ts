import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  colors: string[];
  barcode: string[];

  constructor() {
    this.title = 'Retro Barcode Generator';
    this.colors = ['#8A2BE2','#DC143C','#008B8B','#00BFFF','#F8F8FF','#FF69B4','#00FF00','#FF00FF','#FF4500','#00FF7F','#FFFF00','#EE82EE','#663399','#0000CD','LimeGreen '];
    this.barcode = [];
    for (var x = 0; x < 10; x++) {
      this.barcode[x] = this.colors[Math.floor(Math.random()*this.colors.length)];
    }
  }
}