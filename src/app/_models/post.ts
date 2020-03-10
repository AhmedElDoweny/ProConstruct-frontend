import {Client} from './client';

export class Post {
  constructor(
    public _id?: number,
    public title?: string,
    public category?: string,
    public description?: string,
    public price?: number,
    public image?: string,
    public client?: Client,
    public location?: { lng: number, lat: number }
  ) {
  }
}
