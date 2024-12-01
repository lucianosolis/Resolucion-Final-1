import LibrosService from "../services/libros.services.js";

class LibrosController{

    constructor(){
        this.service=new LibrosService()
    }

    getLibros=async(req,res)=>{

        const libros=await this.service.getLibros()
        res.send(libros)
    }

    postLibros=async(req,res)=>{
        const data=req.body
        const newLibro=await this.service.postLibros(data)
        res.send(newLibro)
    }

    deleteLibros=async(req,res)=>{
        const {id}=req.params
        const libroEliminado=await this.service.deleteLibros(id)
        res.send(libroEliminado)
    }
    
    patchLibros=async(req,res)=>{

        const {id}=req.params
        const data=req.body

        const libroModificado=await this.service.patchLibros(id,data)
        res.send(libroModificado)
    }
}

export default LibrosController