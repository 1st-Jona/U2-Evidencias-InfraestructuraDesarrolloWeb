(()=>{
//FUNCIÓN FLECHA


    let funcion1 = function(a:string){
        return a;
    }

    const funcionFlecha = (a:string) => a.toUpperCase();

    const funcionFlecha2 = (a : string) => a.toUpperCase();


    const sumarN = function (a:number,b:number){
        return a+b;
    }

    const sumarF = (a:number,b:number)=>a+b;

 

    
    const luffy ={
        nombre:'Luffy',
        gomu(){

            setTimeout( ()=>{
                console.log(`${this.nombre} gomu gomu no!!`);
            },1000   );
    
            }
           
        }
    

    luffy.gomu();


})();