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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: IconComponent, selector: "app-icon", inputs: { color: "color", iconClass: "iconClass", iconSize: "iconSize" }, ngImport: i0, template: "<i [ngClass]=\"iconClass + ' ' + size + ' ' + color\" class=\"icon\"> </i>\r\n", styles: [".icon{cursor:pointer}.icon.smallSize{height:16px;width:16px}.icon.mediumSize{height:24px;width:24px}.icon.largeSize{height:32px;width:32px}.icon.neutral-white{color:var(--brand-color-neutral-white)}.icon.neutral-black{color:var(--brand-color-neutral-black)}.icon.primary{color:var(--brand-color-primary)}.icon.secondary{color:var(--brand-color-secondary)}.icon.tertiary{color:var(--brand-color-tertiary)}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-icon', template: "<i [ngClass]=\"iconClass + ' ' + size + ' ' + color\" class=\"icon\"> </i>\r\n", styles: [".icon{cursor:pointer}.icon.smallSize{height:16px;width:16px}.icon.mediumSize{height:24px;width:24px}.icon.largeSize{height:32px;width:32px}.icon.neutral-white{color:var(--brand-color-neutral-white)}.icon.neutral-black{color:var(--brand-color-neutral-black)}.icon.primary{color:var(--brand-color-primary)}.icon.secondary{color:var(--brand-color-secondary)}.icon.tertiary{color:var(--brand-color-tertiary)}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], iconSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBVWpELE1BQU0sT0FBTyxhQUFhO0lBQ2YsS0FBSyxHQUF1QixlQUFlLENBQUM7SUFDNUMsU0FBUyxDQUFVO0lBQ25CLFFBQVEsR0FBc0IsUUFBUSxDQUFDO0lBRWhELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQzNHLENBQUM7d0dBUFUsYUFBYTs0RkFBYixhQUFhLDBIQ1YxQixnRkFDQTs7NEZEU2EsYUFBYTtrQkFMekIsU0FBUzsrQkFDRSxVQUFVOzhCQUtYLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuL3NoYXJlZC90eXBlcy9jb2xvcnMudHlwZSc7XHJcbmltcG9ydCB7IFNpemVUeXBlIH0gZnJvbSAnLi9zaGFyZWQvdHlwZXMvc2l6ZXMudHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pY29uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2ljb24uY29tcG9uZW50LnNjc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyB8IENvbG9yVHlwZSA9ICduZXV0cmFsLXdoaXRlJztcclxuICBASW5wdXQoKSBpY29uQ2xhc3MhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvblNpemU6IHN0cmluZyB8IFNpemVUeXBlID0gJ21lZGl1bSc7XHJcblxyXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaWNvblNpemUgPT09ICdzbWFsbCcgPyAnc21hbGxTaXplJyA6IHRoaXMuaWNvblNpemUgPT09ICdtZWRpdW0nID8gJ21lZGl1bVNpemUnIDogJ2xhcmdlU2l6ZSc7XHJcbiAgfVxyXG59XHJcbiIsIjxpIFtuZ0NsYXNzXT1cImljb25DbGFzcyArICcgJyArIHNpemUgKyAnICcgKyBjb2xvclwiIGNsYXNzPVwiaWNvblwiPiA8L2k+XHJcbiJdfQ==