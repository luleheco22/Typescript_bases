(()=>{

  interface Client {
    name:string;
    age?:number;
    address:Address;
    getFullAddress( id: string):string;
  }

  interface Address {
    id:number;
    zip:string;
    city:string
  }



  const client:Client ={
    name:'Leonel',
    age:30,
    address:{
        id:130,
        zip:'OTO',
        city:'Caracas'
    },
    getFullAddress(id:string) {
        return this.address.city
    },
  }

  const client2:Client = {
       name:'Stefany',
       age:25,
       address:{
        id:20,
        zip:'LOL',
        city:'Caracas'
       },
       getFullAddress(id:string) {
        return this.address.city
    },
  }

  

})()