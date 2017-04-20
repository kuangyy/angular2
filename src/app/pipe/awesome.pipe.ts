/**
 * Created by ky on 2017/4/19.
 */
import {Pipe, PipeTransform} from '@angular/core';

// 管道
@Pipe({name: 'awesome'})
/** Precede the input string with the word "Awesome " */
export class AwesomePipe implements PipeTransform {
    transform(phrase: string) {
        return phrase ? 'name: ' + phrase : '';
    }
}
