import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class IconComponent {
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

class IconModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: IconModule, declarations: [IconComponent], imports: [CommonModule], exports: [IconComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IconModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [IconComponent],
                    imports: [CommonModule],
                    exports: [IconComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { IconComponent, IconModule };
//# sourceMappingURL=design-system-icon.mjs.map
