(function(){
//1ro obligatior
//2do opcionales 
//3ro por defecto
    function activar(quien:string,
                     objeto:string='Gear 4',
                     momento?:string){         //  ? para indicar que es opcional
        

                        if(momento){
                            console.log(`${quien} usó el ${objeto} contra ${momento}`);
                        }else{
                            console.log(`${quien} usó el ${objeto}`);
                        }
                       
    }
  activar('Luffy','Gear 4','Doffy');
  activar('Luffy','Doffy');
  


})();