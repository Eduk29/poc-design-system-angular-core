import { Component, Input } from '@angular/core';

import { sizeType } from '../../shared/types/sizes.type';
import { colorType } from '../../shared/types/colors.type';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() color: string | colorType = 'neutral-white';
  @Input() iconClass!: string;
  @Input() iconSize: string | sizeType = 'medium';

  public get size(): string {
    return this.iconSize === 'small' ? 'smallSize' : this.iconSize === 'medium' ? 'mediumSize' : 'largeSize';
  }
}
