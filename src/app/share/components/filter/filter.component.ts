import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() label: string = '';
  @Input() list: any[] = [];
  @Output() changes = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onChange(value: number) {
    this.changes.emit(value);
  }
}
