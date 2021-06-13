import { Injectable } from '@angular/core';
import { PostPass } from '../models/pass';
import { ApiService } from './api.service';
import { EventKeywords, EventObject, EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class PassService {
  constructor(
    private apiService: ApiService,
    private eventService: EventService
  ) {
  }

  async createPass(obj, parkSk, facilitySk) {
    // Remove non-valid fields and verify field types.
    let postObj = new PostPass(obj);
    postObj.parkName = parkSk;
    postObj.facilityName = facilitySk;

    let res = null;
    try {
      this.checkManditoryFields(postObj);
      res = await this.apiService.post('pass', postObj);
    } catch (e) {
      console.log('ERROR', e);
      this.eventService.setError(
        new EventObject(
          EventKeywords.ERROR,
          e,
          'Park Service'
        )
      );
      throw e;
    }
    return res;
  }

  private checkManditoryFields(obj) {
    if (!obj.date) {
      throw ('You must provide a pass date');
    }
    if (obj.email === '' || !obj.email) {
      throw ('You must provide a pass email');
    }
    if (obj.firstName === '' || !obj.firstName) {
      throw ('You must provide a pass firstName');
    }
    if (obj.lastName === '' || !obj.lastName) {
      throw ('You must provide a pass lastName');
    }
    if (obj.numberOfGuests === '' || !obj.numberOfGuests) {
      throw ('You must provide a pass numberOfGuests');
    }
    if (obj.type === '' || !obj.type) {
      throw ('You must provide a pass type');
    }
  }
}
