class LibrosMemModel{

    constructor(){
        this.libros=[]
    }

    getLibros=async()=>{

        
        const librosDisponibles=this.libros.filter(l=>l.estado=="disponible").map(l=>({titulo:l.titulo,estado:l.estado}))
        const librosAlquilados=this.libros.filter(l=>l.estado=="alquilado").map(l=>({titulo:l.titulo,estado:l.estado}))
        const librosNoAptos=this.libros.filter(l=>l.estado=="no apto").map(l=>({titulo:l.titulo,estado:l.estado}))
        return "libros disponibles: "+JSON.stringify(librosDisponibles) + " libros alquilados: "+JSON.stringify(librosAlquilados) + "libros no aptos: "+JSON.stringify(librosNoAptos)
    }

    postLibros=async(data)=>{
        console.log(JSON.stringify(data))
        if(JSON.stringify(data)=="{}"){
            return "el objeto que envio esta vacio"
        }
        if(this.libros.length==0){
            data.id=1
        }else{
            data.id=this.libros[this.libros.length -1].id +1
        }
        if(data.estado!="disponible"){
            data.estado="disponible"
        }
        this.libros.push(data)

        return (data)
    }

    deleteLibros=async(id)=>{
        const libroEliminado= this.libros.findIndex(l=>l.id==id)
        if(libroEliminado!=-1){
            const libro={...this.libros[libroEliminado]}
            console.log("libro eliniado"+JSON.stringify(libro))
            this.libros.splice(libroEliminado,1)
            return "el libro eliminado fue: "+JSON.stringify(libro)
        }else{

            return "no se ha encontrado el id"
        }
    }

    patchLibros=async(id,data)=>{

        const posLibro=this.libros.findIndex(l=>l.id==id)
        if(posLibro!=-1){
            const obj={...this.libros[posLibro],...data}
            this.libros.splice(posLibro,1,obj)
            if(obj.estado=="alquilado"){
                try{
                    console.log("en el fetch")
                    const response=await fetch("https://libros.deno.dev/premios")
                    const premios=await response.json()
                    console.log(premios.premio)
                    if(premios.premio==true){
                        this.deleteLibros(this.libros[posLibro].id)
                        return "felicidad ha ganado el premio y se lleva el libro : "+JSON.stringify(obj)
                    }
                } catch(error){

                    console.log("error en la solicitud de la api")
                }
                
            }
            return obj
        }else{

            return "no se ha encontrado el id"
        }
    
        

    }

}

export default LibrosMemModel