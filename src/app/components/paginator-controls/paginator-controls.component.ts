import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator-controls',
  templateUrl: './paginator-controls.component.html',
  styleUrls: ['./paginator-controls.component.scss']
})
export class PaginatorControlsComponent implements OnChanges {
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  @Input() totalRecords: number;
  @Input() recordsPerPage: number;

  pages: number[];
  selectedPage: number = 1;

  constructor() { }

  ngOnChanges() {
    const totalPages: number = Math.ceil(this.totalRecords / this.recordsPerPage);

    this.pages = [];

    for (let i=1;i<=totalPages;i++) {
      this.pages.push(i);
    }

    console.log(this.pages)
  }

  public selectPage(page: number) {
    this.selectedPage = page;

    this.pageChange.emit(this.selectedPage)
  }

}
