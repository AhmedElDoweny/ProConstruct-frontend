export class Setting {
  constructor(
    public _id: number,
    public aboutApp: string,
    public contactEmail: string,
    public links: [string],
    public contactUsMessages: [{
      id: number,
      name: string,
      email: string,
      subject: string,
      message: string,
    }],
    public newsLetterEmails: [string]
  ) {
  }
}
