import LibrosMemModel from "./DAO/libros.models.mem.js"

class Factory{

    static get(persistencia){
        switch(persistencia){
            case "MEM":
                console.warn("persistencia en la memoria del servidor")
                return new LibrosMemModel()
            default:
                console.warn("persistiendo por default en la memoria")
                return new LibrosMemModel()

        }
        
    }

}

export default Factory