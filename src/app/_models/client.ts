export class Client {
  constructor(
    public _id?: number,
    public name?: string,
    public password?: string,
    public email?: string,
    public phone?: string,
    public location?: string,
    public role?: string,
    public post?: [number],
    public cart?: number,
    public image?: string,
    public notification?: [number]
  ) {
  }
}
