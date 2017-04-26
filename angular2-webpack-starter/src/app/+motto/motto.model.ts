/**
 * Created by ky on 2017/4/26.
 */

export class Motto {
  id: number;
  name: string;
  translate: string;
  create_time: string;



  constructor(name?: string, translate?: string) {
    this.name = name;
    this.translate = translate;
  }

}
