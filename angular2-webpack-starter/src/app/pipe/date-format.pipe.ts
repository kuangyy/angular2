import { Pipe, PipeTransform } from '@angular/core';

/*
dateformat fram timestamp to date
 */
@Pipe({name: 'dateFormat'})
export class DateFormatPipe implements PipeTransform {
  //第一个为本身 后面为附加参数 pipe:a:b:c
  transform(timestamp: number): Date {
    return new Date(timestamp);
  }
}
