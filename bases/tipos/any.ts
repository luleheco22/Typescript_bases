(()=>{

  let avenger:any=123;
  let exists;
  let power;

  avenger='Dr Strange';

  console.log((avenger as string).charAt(0));

  avenger=15.1515252
  console.log((<number>avenger).toFixed(2))

})()