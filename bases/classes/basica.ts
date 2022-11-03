(()=>{
    
    class Avenger {
        //private name:string;
        //public team: string;
        //realName?:string;
        static avgAge:number=35;
        static getAvgAge(){
            return this.name
        }
        constructor(
            private name:string,
            private team:string,
            public realName?:string
            ){}

         bio(){
            return `${this.name} (${this.team})`
         }

    }

    const antman: Avenger= new Avenger('Antman','Capitan','Scott Lang')
    console.log(antman.bio())
    console.log(Avenger.getAvgAge())

})()