export interface IListPeople {
    pK_IDList: number;
    id : string;
    name : string;
    gender : string;
    age: number;
    department : string;
    birthday: Date;
    NumberPhone: string;
       
    //    constructor(
    //        id : string,
    //        name : string,
    //        gender : string,
    //        age: number,
    //        department : string,
    //        birthday: Date,
    //        numberPhone : string,
    //        ){
    //         this.id = id;
    //         this.name = name;
    //         this. gender =  gender;
    //         this.age = age;
    //         this.department = department;
    //         this.birthday = birthday;
    //         this.numberPhone = numberPhone;
    //    }
   }


   export class ListPeople {
    constructor(
        ID : string,
        Name : string,
        Gender : string,
        Age: number,
        Department : string,
        Birthday: Date,
        NumberPhone : string,  
     ) {}
   }

   