/**
 * Created by ky on 2017/4/19.
 */
import {Directive, ElementRef, HostListener, Input} from '@angular/core';

// 声明指令
@Directive({selector: '[myHighlight]'})
/** Highlight the attached element in gold */
export class HighlightDirective {

    @Input() defaultColor: string;
    // 添加参数
    @Input('myHighlight') highlightColor: string;

    // 私有保证 当指令被销毁的时候，必须拆卸事件监听器，否则会导致内存泄露。
    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor || 'gold');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
        console.log(
            `* highlight Directive called for ${this.el.nativeElement.tagName}`);
    }

}
