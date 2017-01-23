import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bcl-percentage-bar',
  templateUrl: './bcl-percentage-bar.component.html',
  styleUrls: ['./bcl-percentage-bar.component.scss']
})
export class BclPercentageBarComponent implements OnInit {
	
	@Input() increment: number = 50;
	@Input() text: string = '';

	constructor(){}

	getIncrementValue(): string {
		return this.increment + '%';
	}

	getEmptyValue(): string {
		return 100 - Number(this.increment) + '%';
	}

	ngOnInit(): void {
	}
}
