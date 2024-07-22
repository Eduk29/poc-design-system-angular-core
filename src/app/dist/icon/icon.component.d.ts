import * as i0 from '@angular/core';

import { ColorType } from './shared/types/colors.type';
import { SizeType } from './shared/types/sizes.type';

export declare class IconComponent {
  color: string | ColorType;
  iconClass: string;
  iconSize: string | SizeType;
  get size(): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<
    IconComponent,
    'app-icon',
    never,
    {
      color: { alias: 'color'; required: false };
      iconClass: { alias: 'iconClass'; required: false };
      iconSize: { alias: 'iconSize'; required: false };
    },
    {},
    never,
    never,
    false,
    never
  >;
}
