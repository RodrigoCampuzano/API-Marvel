export class Character{
    #id
    #firstName
    #comics = []
    #events = []
    #series = []
    #stor = []
    #img

    setId(id){ this.#id=id }
    getId(){ return this.#id }

    setFirstName(firstNmae){ this.#firstName=firstNmae }
    getFirstName(){ return this.#firstName }

    setComics(comics){ this.#comics=comics }
    getComics(){ return this.#comics }
    
    setEvents(events){ this.#events=events}
    getEvents(){return this.#events}

    setSeries(series){ this.#series=series }
    getSeries(){ return this.#series }

    setStor(stor){ this.#stor=stor }
    getStor(){return this.#stor}

    setImagen(img){ this.#img=img }
    getImagen(){ return this.#img}
}
