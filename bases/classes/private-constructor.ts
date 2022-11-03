(()=>{

    class Apocalispsis{

        static instance:Apocalispsis;
        
        private constructor(public name:string){

        }

        static callApocalipsis():Apocalispsis{
              if (!Apocalispsis.instance) {
                  Apocalispsis.instance = new Apocalispsis('Soy apocalipsis')
              }

              return Apocalispsis.instance
        }

        changeName( newName:string):void{
            this.name=newName
        }

    }
     const apocalipsis1 = Apocalispsis.callApocalipsis()

     apocalipsis1.changeName('Xavier')
   // const apocalipsis = new Apocalispsis('Soy apocalipsis...el unico');

    //console.log(apocalipsis);

})()