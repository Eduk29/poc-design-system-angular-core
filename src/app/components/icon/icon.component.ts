import { Component, Input } from '@angular/core';

import { ColorType } from '../../shared/types/colors.type';
import { SizeType } from '../../shared/types/sizes.type';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() color: string | ColorType = 'neutral-white';
  @Input() iconClass!: string;
  @Input() iconSize: string | SizeType = 'medium';

  public get size(): string {
    return this.iconSize === 'small' ? 'smallSize' : this.iconSize === 'medium' ? 'mediumSize' : 'largeSize';
  }
}
