import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chevron',
  templateUrl: './chevron.component.html',
  styleUrls: ['./chevron.component.scss'],
})
export class ChevronIconComponent implements OnInit {
  @Input() opened = true;

  constructor() {}

  ngOnInit(): void {}
}
