import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bcl-pie-chart',
  templateUrl: './bcl-pie-chart.component.html',
  styleUrls: ['./bcl-pie-chart.component.scss']
})
export class BclPieChartComponent implements OnInit {

	@Input() positive: number = 0;
	@Input() negative: number = 0;
	totalStrokeDash = 158;//Seems to be the value when the stroke-dash fill a portion of the circle

	positivePer = 0;

	getIncrementValue(): string {
		let value = ( this.totalStrokeDash * this.positivePer )/100 + ', ' + this.totalStrokeDash;
		return value;
	}

  constructor() { }

  ngOnInit(): void {
  	let total = Number(this.positive) + Number(this.negative);
  	this.positivePer = (this.positive*100)/total;
  }

}
