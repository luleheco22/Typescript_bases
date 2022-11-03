(()=>{

    type Hero = {
        name:string;
        age?:number;
        powers:string[];
        getName?:() => string
    }

    let myCustomVariable: (string | number | Hero) = 'Leonel'


    myCustomVariable=20;

    myCustomVariable='Fuerza'

    myCustomVariable={
        name:'Leonel',
        powers:['Fuerza']
    }
})()