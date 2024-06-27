import { Component } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html'
})
export class ItemPageComponent  {
  constructor(private itemService: ItemService) {}

  get items(): Item[] {
    return [...this.itemService.items];
  }

  onDeleteItem(id: string): void {
    this.itemService.deleteItemById(id);
  }

  onNewItem(item: Item): void {
    this.itemService.addItem(item);
  }
}
