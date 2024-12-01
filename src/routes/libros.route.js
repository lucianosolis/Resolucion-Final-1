import LibrosController from "../controllers/libros.controller.js";
import express from "express"

class LibrosRoutes{

    constructor(){
        this.router=express.Router()
        this.controller=new LibrosController()
    }

    start(){
        this.router.get("/libros",this.controller.getLibros)
        this.router.post("/libros",this.controller.postLibros)
        this.router.delete("/libros/delete/:id",this.controller.deleteLibros)
        this.router.patch("/libros/patch/:id",this.controller.patchLibros)

        return this.router
    }

}

export default LibrosRoutes