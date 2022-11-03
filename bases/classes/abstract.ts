(()=>{

   abstract class Mutant {
        constructor(
          public  name:string,
          public  realName:string
        ){

        }
    }

    //const wolwerine:Mutant

    class Xmen extends Mutant {

         salvarMundo(){
            return 'Mundo a salvo!'
         }

    }
    class Villian extends Mutant{

         conquistarMundo(){
            return 'Mundo conquistado'
         }

    }
    
    const wolwerine = new Xmen('Wolverine','Logan');
    const magento = new Villian('Magneto','Magnus');

    //console.log(wolwerine);
   // console.log(magento);

   const printName = (character:Mutant)=>{
    console.log(character.realName)
   }

   printName(magento)




})()