import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import models
import { Fruit} from '../../models/fruit';
// import storage providers
import {StorageProvider} from '../../providers/storage/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<any> = [];
  name: string;
  color: string;
  taste: string;
  constructor(public navCtrl: NavController, private storage: StorageProvider) {
    let fruitdata = this.storage.readData();
    if(fruitdata){
      this.items = fruitdata;
    }
  }
  doSomething(){
    this.items.forEach((item)=>{console.log(item)});
  }
  addItem(){
    // let item = this.input;
    // this.items.push(item);
    // this.input = '';
    // console.log(this.items);

    let fruit = new Fruit(this.name, this.color, this.taste);
    this.items.push(fruit);
    // storage the fruit Array
    this.storage.writeData(this.items);
    this.name = '';
    this.color = '';
    this.taste = '';

  }
}
