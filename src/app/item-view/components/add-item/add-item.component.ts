import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'item-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  @Output()
  public onNewItem: EventEmitter<Item> = new EventEmitter();

  public item: Item = {
    name: '',
    price: 0,
    qty : 0
  };

  emitItem():void {

    if ( this.item.name.length === 0 ) return;

    this.onNewItem.emit(this.item);

    this.item = { name: '', price: 0 ,qty: 0};
  }

}
