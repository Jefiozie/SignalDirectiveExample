import { HttpClient } from '@angular/common/http';
import { Directive, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ListComponent } from './list.component';
import { SIGNAL } from '@angular/core/primitives/signals';
const url = 'https://jsonplaceholder.typicode.com/users';
@Directive({
  selector: 'list[with-fetch]',
  standalone: true,
})
export class ADirDirective {
  cmp = inject(ListComponent);
  httpClient = inject(HttpClient);

  constructor() {
    this.loadList();
  }

  async loadList() {
    const users = await firstValueFrom(this.httpClient.get(url));
    console.log(users);
    const node = this.cmp.list[SIGNAL];
    setTimeout(() => {
      node.applyValueToInputSignal(node, users as any[]);
    }, 800);
  }
}
