export class ResponeBase {
        constructor(
        public Data: people,
        public Success: boolean,
        public StatusCode:number,
        public Message:string
     
     ) {
            this.Data = Data;
            this.Success = Success;
            this. StatusCode =  StatusCode;
            this.Message = Message;
            }
   }

   export class people {
    constructor(
    public Name: string,
    
 ) {this.Name = Name}
}


