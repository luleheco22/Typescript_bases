(()=>{

    interface addTwoNumbers {
        (a:number,b:number):number;   //Funcion en la interfcae
    }

    let addNumbersFunction:addTwoNumbers;

    addNumbersFunction=(a:number, b:number)=>{
        return a+b;
    }

})()