import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {ItemPage} from "../item/item";
import {CartPage} from "../cart/cart";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage {
  // items
  public items: any;

  constructor(public nav: NavController, public itemService: ItemService) {
    // get all items
    this.items = itemService.getAll();
  }

  // view item detail
  viewItem(id) {
    this.nav.push(ItemPage, {id: id})
  }

  // remove item from cart
  remove(index) {
    this.items.splice(index, 1);
  }

  // add to cart
  addCart(item) {
    this.nav.push(CartPage);
  }
}
