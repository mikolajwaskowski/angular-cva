import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.scss'],
})
export class TooltipContentComponent {
  @Input() text = '';
}
