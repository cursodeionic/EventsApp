import { EventPage } from './../event/event';
import { EventsServiceProvider } from './../../providers/events-service/events-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [EventsServiceProvider]
})
export class ListPage {
  data;
  constructor(
    public NavController: NavController,
    public Events: EventsServiceProvider
  ) {}

  ionViewDidLoad(){
   this.Events.getEvents().subscribe(
     data => { 
      this.data = data;
     },
     error => {
      console.log(error);
     }
   )
  }

  goToEvent(id) {
    this.NavController.push(EventPage, {
      id: id
    });
  }
}
