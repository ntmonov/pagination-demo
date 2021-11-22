import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): unknown {
    const page: number = args[0].page;
    const recordsPerPage: number = args[0].recordsPerPage;

    const startIdx: number = (page - 1) * recordsPerPage;
    const endIdx: number = startIdx + recordsPerPage;

    const list: any[] = [...value].slice(startIdx, endIdx);

    return list;
  }

}
