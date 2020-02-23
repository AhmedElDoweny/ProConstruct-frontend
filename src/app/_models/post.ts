import { Client } from './client';

export class Post {
  constructor(
    _id: number,
    title: string,
    category: string,
    description: string,
    price: number,
    image: string,
    client: Client
  ) {
  }
}
