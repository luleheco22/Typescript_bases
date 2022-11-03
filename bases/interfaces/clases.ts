(()=>{

    interface Xmen {
        name:string,
        realName:string
        mutantPower(id:number):void
    }

    interface Human {
        age:number,

    }

    class Mutant implements Xmen, Human {
        public name:string='';
        public realName: string='';
        public age:number=30;

        mutantPower(id:number){
            return `${this.name} - ${this.realName}`
        }
    }

    const wolerine = new Mutant()

})()