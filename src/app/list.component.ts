import { Component, input } from '@angular/core';

@Component({
  selector: 'list',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (user of list(); track user.id) {
      <li>{{ user.name }}</li>
      }
    </ul>
  `,
})
export class ListComponent {
  list = input<any[]>();
}
