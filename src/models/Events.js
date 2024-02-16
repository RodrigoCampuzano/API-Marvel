export class Events{
    #resourceURI
    #name

    setresourceURI(resourceURI){
        this.#resourceURI = resourceURI;
    }

    getresourceURI(){
        return this.#resourceURI
    }

    setName(name){
        this.#name = name
    }

    getName(){
        return this.#name
    }
}