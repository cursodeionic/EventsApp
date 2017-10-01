import { EventsServiceProvider } from '../../providers/events-service/events-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  eventId;
  data;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public Events: EventsServiceProvider
  ) {
    this.eventId = this.navParams.get('id');
  }

  ionViewDidLoad() {
    this.Events.getEvent(this.eventId).subscribe(
      data => { 
       this.data = data;
      },
      error => {
       console.log(error);
      }
    )
  }

}
