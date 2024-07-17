import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { ButtonTypes } from '../../shared/types/button.type';
import { ColorType } from '../../shared/types/colors.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnChanges {
  @Input() color: string | ColorType = 'primary';
  @Input() icon: string = '';
  @Input() iconColor: string | ColorType = 'neutral-white';
  @Input() type: string | ButtonTypes = 'standard';

  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();

  private _displayButton: boolean = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.validateBackgroundColors(changes);
    this.validateIconForFabButton(changes);
    this.validateOutputFunction();
  }

  public get displayButton(): boolean {
    return this._displayButton;
  }

  public get isFabButton(): boolean {
    return this.type === 'fab';
  }

  public dispatchClickEvent(data: any): void {
    this.clickEvent.emit(data);
  }

  private validateBackgroundColors(changes: SimpleChanges): void {
    if (changes['color'] && (changes['color'].currentValue === 'neutral-white' || changes['color'].currentValue === 'neutral-black')) {
      console.error('Button background color should be different from white or black');
      this._displayButton;
    }
  }

  private validateIconForFabButton(changes: SimpleChanges): void {
    if (changes['type'].currentValue === 'fab' && !changes['icon']) {
      console.error('Icon is required for FAB button');
      this._displayButton = false;
    }
  }

  private validateOutputFunction(): void {
    const clickIsObserved = this.clickEvent.observed;

    if (!clickIsObserved) {
      console.error('Output function is required for button');
      this._displayButton = false;
    }
  }
}
