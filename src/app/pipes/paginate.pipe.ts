import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): unknown {
    const objectsList: any[] = [...value];
    const page: number = args[0].page;
    const recordsPerPage: number = args[0].recordsPerPage;

    // let objects: any[] = [];

    // objects = objectsList.slice(page - 1, recordsPerPage);

    return objectsList.slice(page - 1, recordsPerPage);
  }

}
