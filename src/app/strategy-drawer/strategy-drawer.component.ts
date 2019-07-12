import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy-drawer',
  templateUrl: './strategy-drawer.component.html',
  styleUrls: ['./strategy-drawer.component.css']
})
export class StrategyDrawerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  song: any[] = [{hover:false, click: false},{hover:false, click: false}];

  hoverStateIn(index){
    console.log('test in'+ index);
    this.song[index].hover = true
  }

  hoverStateOut(index){
    console.log('test out');
    this.song[index].hover = false;
  }

  onClick(index)
  {
    this.song[index].click = !this.song[index].click ;
  }

}