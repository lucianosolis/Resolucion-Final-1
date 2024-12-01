import Factory from "../models/Factory.js";

class LibrosService{

    constructor(){

        this.model=Factory.get("")
    }

    getLibros=async()=>{

        const libros=await this.model.getLibros()
        return libros
    }

    postLibros=async(data)=>{

        const newLibro=await this.model.postLibros(data)
        return newLibro
    }

    deleteLibros=async(id)=>{
        const libroEliminado=await this.model.deleteLibros(id)
        return libroEliminado
    }
    patchLibros=async(id,data)=>{
        const libroModificado=await this.model.patchLibros(id,data)
        return libroModificado
    }
}

export default LibrosService