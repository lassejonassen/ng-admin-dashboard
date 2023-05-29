import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-box',
  templateUrl: './small-box.component.html',
  styleUrls: ['./small-box.component.scss'],
})
export class SmallBoxComponent {
  @Input() number: number;
  @Input() text: string;
  @Input() href: string;
  @Input() color: string;
  @Input() icon: string;
}
