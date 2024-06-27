import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public items: Item[] = [{
    id: uuid(),
    name: 'loremItem1',
    price: 1000,
    qty: 10
  },{
    id: uuid(),
    name: 'loremItem2',
    price: 9500,
    qty: 10
  },{
    id: uuid(),
    name: 'loremItem3',
    price: 7500,
    qty: 10
  }];


  addItem( item: Item ):void {

    const newItem: Item = { id: uuid(), ...item };

    this.items.push(newItem);
  }

  deleteItemById( id:string ) {
    this.items = this.items.filter( items => items.id !== id );
  }


}
