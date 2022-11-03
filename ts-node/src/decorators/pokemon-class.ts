
//Decoradores son funciones que expanden la funcionalidad de clases, metodos, propiedades.
function printToConsole(constructor:Function){
     console.log(constructor)
}

const printToConsoleConditional = (print:boolean=false):Function => {
      if (print) {
        return printToConsole
      }else{
        return ()=>{}
      }
}



const blockPrototype = function(constructor:Function){
     Object.seal(constructor)
     Object.seal(constructor.prototype)
} 


//Decorador de metodos
function CheckValiPokemonId(){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
      
        const originalMethod =  descriptor.value

        descriptor.value=(id:number)=>{
            if (id<1 || id>850) {
                return console.error('El id del pokemon debe estar entre 1 y 850')
            }else{
               return originalMethod(id)
            }
        }
    }
}


//Decorador de propiedad
function readOnly(isWritable:boolean = true):Function{
     return function(target:any,propertyKey:string){

         const descriptor:PropertyDescriptor = {
             get(){
                console.log(this)
               return this
             },
             set(this,val){
                Object.defineProperty(this,propertyKey,{
                    value:val,
                    writable:!isWritable,
                    enumerable:false
                })
             }
         }

         return descriptor
     }
}


@blockPrototype
@printToConsoleConditional( true )
export class Pokemon {
    
    @readOnly()
    public publicApi:string='https://pokeapi.co'

    constructor(
        public name:string,
    ){}

    @CheckValiPokemonId()
    savePokemonToDB(id:number){
        console.log(`Pokemon guardado en DB ${id}`)
    }
}