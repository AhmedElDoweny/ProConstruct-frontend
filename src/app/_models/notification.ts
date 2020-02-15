export class Notification {
    constructor(
        public _id:number,
        public title:string,
        public content:string,
        public client:number,
        public isseen:boolean,
        public isread:boolean,
        
    ){}
}

