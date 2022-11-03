(()=>{

    const addNumbers = (a:number, b:number) => a+b;
    const greet = (name:string) => `Hola ${name}`;
    const saveTheWorld = ()=> `El mundo esta salvado!`;

    let myFuntion: Function;

    //myFuntion=10

    myFuntion= addNumbers;
    myFuntion= greet;
    myFuntion= saveTheWorld;

    

})()