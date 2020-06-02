import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@IonicPage()
@Component({
  selector: 'page-logger',
  templateUrl: 'logger.html',
})
export class LoggerPage {
  todos: string[] = [];
  todo: string;
  protime = [];
  acttime;
  constructor(
    public navCtrl: NavController,
    public afauth: AngularFireAuth,
    public afstore: AngularFirestore
    ) {
  }

  private mode(arr1: any) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr1.length; i++) {
      for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
          m++;
        if (mf < m) {
          mf = m;
          item = arr1[i];
        }
      }
      m = 0;
    }
    return item;
  }

  public add() {
    this.todos.push(this.todo);
    this.todo = "";
    let date = new Date()
    this.protime.push(date.getHours());
    console.log(this.protime)
    this.acttime = this.mode(this.protime);
    console.log(this.acttime)
  }
}
