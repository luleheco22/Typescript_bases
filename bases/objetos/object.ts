(()=>{

  let flash:{name:string,age:number,powers:string[],getName?:()=>string}={
    name:'Barry Allen',
    age:24,
    powers:['velocidad','viajar en el tiempo'],
    getName() {
        return this.name
    },
  }
  let superman:{name:string,age:number,powers:string[],getName?:()=>string}={
    name:'Clark Kent',
    age:40,
    powers:['super fuerza'],
    getName() {
        return this.name
    },
  }


})()