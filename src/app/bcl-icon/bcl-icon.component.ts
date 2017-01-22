import { Component, Input } from '@angular/core';

@Component({
  selector: 'bcl-icon',
  templateUrl: './bcl-icon.component.html',
  styleUrls: ['./bcl-icon.component.scss']
})
export class BclIconComponent {

	@Input() icon: string = 'desktop';
	@Input() size: string = 'sm';
	@Input() text: string = '';
	@Input("text-position") textPosition: string = 'right';
}
