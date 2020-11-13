(()=>{

   const sumar = (a:number, b:number):number =>a+b;

   const nombre = ():String => 'Hola Jonathan'

   const obtenerSalario = ():Promise<String>=>{

    return new Promise((resolve,reject)=>{  
        resolve('Jonathan');
    });
} 
    obtenerSalario().then(a =>console.log(a.toUpperCase()));
    
})();
