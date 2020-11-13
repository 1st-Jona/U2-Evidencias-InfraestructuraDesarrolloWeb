(()=>{
    const avenger = {
        nombre:"Shanks",
        clave:"Yonkou",
        poder:"Haki"

    }
        const extraer = ({nombre,poder}:any)=>{

    //const {nombre,poder} = avenger;
      console.log(avenger.nombre);
      console.log(avenger.poder);
}
//extraer(avenger);


const tripulacion:string[]=['Luffy','Zoro','Sanji']

//const [Luffy,Zoro,Sanji] =  tripulacion;
const [ , ,Sanji] =  tripulacion;


console.log(tripulacion[0]);
console.log(tripulacion[1]);
console.log(tripulacion[2]);

console.log(Sanji);

const extraerArreglo = (tripulacion:String[])=>{
    console.log(tripulacion[0]);
    console.log(tripulacion[1]);
    console.log(tripulacion[2]);
}
extraerArreglo(tripulacion);

 
})();