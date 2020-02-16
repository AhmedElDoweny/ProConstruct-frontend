export class Cart {
  constructor(
    public _id: number,
    public client: number,
    public pending: number[],
    public completed: number[],
    public rejected: number[]
  ) {
  }

}
