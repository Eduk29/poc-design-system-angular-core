import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ColorType } from '../../shared/types/colors.type';
import { MastheadModeType } from '../../shared/types/masthead-mode.type';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrl: './masthead.component.scss',
})
export class MastheadComponent implements OnChanges {
  @Input() color: ColorType = 'primary';
  @Input() mastheadMode: MastheadModeType = 'expanded';
  @Input() subtitle?: string;
  @Input() title?: string;

  private _displayMasthead: boolean = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.validateTitle(changes);
  }

  public get displayMasthead(): boolean {
    return this._displayMasthead;
  }

  public get isExpandedMode(): boolean {
    return this.mastheadMode === 'expanded';
  }

  private validateTitle(changes: SimpleChanges): void {
    if (!changes['title']) {
      console.error('Title is required for masthead');
      this._displayMasthead = false;
    }
  }
}
