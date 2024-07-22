import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class IconComponent {
    color = 'neutral-white';
    iconClass;
    iconSize = 'medium';
    get size() {
        return this.iconSize === 'small' ? 'smallSize' : this.iconSize === 'medium' ? 'mediumSize' : 'largeSize';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: IconComponent, selector: "app-icon", inputs: { color: "color", iconClass: "iconClass", iconSize: "iconSize" }, ngImport: i0, template: "<i [ngClass]=\"iconClass + ' ' + size + ' ' + color\" class=\"icon\"> </i>\r\n", styles: [".icon{cursor:pointer}.icon.smallSize{height:16px;width:16px}.icon.mediumSize{height:24px;width:24px}.icon.largeSize{height:32px;width:32px}.icon.neutral-white{color:var(--brand-color-neutral-white)}.icon.neutral-black{color:var(--brand-color-neutral-black)}.icon.primary{color:var(--brand-color-primary)}.icon.secondary{color:var(--brand-color-secondary)}.icon.tertiary{color:var(--brand-color-tertiary)}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-icon', template: "<i [ngClass]=\"iconClass + ' ' + size + ' ' + color\" class=\"icon\"> </i>\r\n", styles: [".icon{cursor:pointer}.icon.smallSize{height:16px;width:16px}.icon.mediumSize{height:24px;width:24px}.icon.largeSize{height:32px;width:32px}.icon.neutral-white{color:var(--brand-color-neutral-white)}.icon.neutral-black{color:var(--brand-color-neutral-black)}.icon.primary{color:var(--brand-color-primary)}.icon.secondary{color:var(--brand-color-secondary)}.icon.tertiary{color:var(--brand-color-tertiary)}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], iconSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVVqRCxNQUFNLE9BQU8sYUFBYTtJQUNmLEtBQUssR0FBdUIsZUFBZSxDQUFDO0lBQzVDLFNBQVMsQ0FBVTtJQUNuQixRQUFRLEdBQXNCLFFBQVEsQ0FBQztJQUVoRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUMzRyxDQUFDO3dHQVBVLGFBQWE7NEZBQWIsYUFBYSwwSENWMUIsZ0ZBQ0E7OzRGRFNhLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsVUFBVTs4QkFLWCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi9zaGFyZWQvdHlwZXMvY29sb3JzLnR5cGUnO1xyXG5pbXBvcnQgeyBTaXplVHlwZSB9IGZyb20gJy4vc2hhcmVkL3R5cGVzL3NpemVzLnR5cGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5zY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgfCBDb2xvclR5cGUgPSAnbmV1dHJhbC13aGl0ZSc7XHJcbiAgQElucHV0KCkgaWNvbkNsYXNzITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25TaXplOiBzdHJpbmcgfCBTaXplVHlwZSA9ICdtZWRpdW0nO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNpemUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmljb25TaXplID09PSAnc21hbGwnID8gJ3NtYWxsU2l6ZScgOiB0aGlzLmljb25TaXplID09PSAnbWVkaXVtJyA/ICdtZWRpdW1TaXplJyA6ICdsYXJnZVNpemUnO1xyXG4gIH1cclxufVxyXG4iLCI8aSBbbmdDbGFzc109XCJpY29uQ2xhc3MgKyAnICcgKyBzaXplICsgJyAnICsgY29sb3JcIiBjbGFzcz1cImljb25cIj4gPC9pPlxyXG4iXX0=