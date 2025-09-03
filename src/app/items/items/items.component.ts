import { Component } from '@angular/core';
import { ItemsStore } from '../data.store';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  standalone: false,
  providers: [ItemsStore]
})
export class ItemsComponent {
  constructor(public store: ItemsStore) { }
  ngOnInit() { 
    this.store.load();
   }
}
